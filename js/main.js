! function () {
  let code = ` /*
  * 首先需要准备皮卡丘的皮
  */
  .preview {
    height: 100%;
    background: #fee22d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
 /*
  * 接着画皮卡丘的鼻子
  */
  .nose {
    width: 0px;
    height: 0px;
    border: 15px solid #000;
    border-radius: 50%;
    border-color: transparent;
    border-top-color: #000;
    position: absolute;
    top: 25px;
    left: 50%;
    margin-left: -15px;
  }
  
  /*
   * 然后画皮卡丘的眼睛
   */
  .eye{
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    border: 3px solid #000;
    border-radius: 50%;
    position: absolute;
  }

  /*
   * 这是皮卡丘的眼珠
   */
  .eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border: 3px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 6px;
  }

  /*
   * 左眼在左边 ~废话
   */
  .eye.left{
    right: 50%;
    margin-right: 90px;
  }

  /*
   * 右眼在右边 ~废话
   */
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }
    
  /*
   * 再画皮卡丘的脸
   */
  .face{
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border-radius: 50%;
    border: 3px solid #000;
    position: absolute;
    top: 85px;
  }

  /*
   * 把脸放到正确的位置
   */
  .face.left{
    right: 50%;
    margin-right: 116px;
  }

  .face.right{
    left: 50%;
    margin-left: 116px;
  }
    
  /*
   * 接着画上嘴唇
   */
  .upperLip {
    width: 76px;
    height: 21px;
    background: #fee22d;
    border: 3px solid #000;
    position: absolute;
    top: 54px;
  }
  
  .upperLip.left {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);
    right: 50%;
  }
  
  .upperLip.right {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
    left: 50%;
  }
  
  /*
   * 这是下嘴唇 
   */
  .lowerLip-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 170px;
    height: 128px;
    margin-left: -85px;
    overflow: hidden;
  }
  
  .lowerLip {
    width: 170px;
    height: 1000px;
    background: #910014;
    border: 3px solid #000;
    border-radius: 100px/500px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }
  
  /*
   * 最后是小舌头
   */
  .lowerLip::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -70px;
    width: 170px;
    height: 170px;
    background: #fd3f59;
    border-radius: 50%;
  }
  
  /*
   * 好了，这只皮卡丘送给你
   */
  `

  function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let timer = setInterval(() => {
      n += 1
      domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css')
      styleTag.innerHTML = code.substring(0, n)
      domCode.scrollTop = domCode.scrollHeight
      if (n >= code.length) {
        window.clearInterval(timer)
      }
    }, 0)
  }
  writeCode('', code)

  
}.call()