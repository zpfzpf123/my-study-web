<template>
  <div id="chatgpt">
    <div class="top">
      <span class="title1">key：</span>
      <el-input
          class="input"
          placeholder="请输入key"
          v-model="keyVal">
      </el-input>
      <span class="title1">问题：</span>
      <el-input
          class="input"
          type="textarea"
          :rows="2"
          placeholder="请输入问题，人工智能将会为你回答问题"
          v-model="textarea">
      </el-input>
    </div>
    <div class="center">
      <el-button @click="sendTheProblem">提交</el-button>
    </div>
    <div class="bottom">
      <span class="title">结果：</span>
      <el-input
          class="input"
          type="textarea"
          :rows="10"
          placeholder="结果"
          v-model="result">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatgpt",
  data(){
    return {
      textarea:'',
      result:'',
      keyVal:'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'
    }
  },
  methods: {
    sendTheProblem(){
      this.getChat(this.textarea)
    },
    getChat(val) {
      let loading=this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${this.keyVal}`);
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "*/*");
      myHeaders.append("Host", "api.openai.com");
      myHeaders.append("Connection", "keep-alive");

      let raw = JSON.stringify({
        "model": "text-davinci-003",
        "prompt": val,
        "temperature": 0,
        "max_tokens": 4000
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://api.openai.com/v1/completions", requestOptions)
          .then(response => response.text())
          .then(result => {
            loading.close()
            if(!JSON.parse(result).error){
              if (JSON.parse(result).choices[0].text[0]==='?'){
                this.result=JSON.parse(result).choices[0].text.slice(1).trimStart()
              }else {
                this.result=JSON.parse(result).choices[0].text.trimStart()
              }
            }else {
              this.$message({
                showClose: true,
                message: JSON.parse(result).error.message,
                type: 'error'
              });
            }

          })
          .catch(error => {
            console.log(error)

          });
    }
  }
}
</script>

<style lang="less" scoped>
#chatgpt{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  flex-wrap: wrap;
  .top,.center,.bottom{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .top{
    height: 20%;
  }
  .input{
    width: 93%;
  }
}
</style>



