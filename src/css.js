const  string  = `
.skin *::after,
.skin *::before {
  box-sizing: border-box;
}
.skin {
  position: relative;
  min-height: 50vh;
   background-color: #ffe600;
}
.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 165px;
  left: 50%;
  margin-left: -10px;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(10deg);
  }
  66% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: 50% 100%;
  animation: wave 400ms infinite linear;
}
.yuan {
  width: 20px;
  height: 6px;
  position: absolute;
  bottom: 10px;
  left: -10px;
  border-top-left-radius: 10px 5px;
  border-top-right-radius: 10px 5px;
  background-color: black;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 120px;
  left: 50%;
  margin-left: -32px;
  border-radius: 50%;
  background-color: #2e2e2e;
}
.eye::before {
  content: "";
  display: block;
  border: 2px solid #000;
  border-radius: 50%;
  background-color: #fff;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 6px;
  top: 1px;
}
.left {
  transform: translateX(-120px);
}
.right {
  transform: translateX(120px);
}
.mouth {
  width: 200px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 200px;
  margin-left: -100px;
}
.mouth > .up {
  position: relative;
  top: -30px;
  z-index: 1;
}
.mouth > .up > .lipLeft {
  border: 3px solid black;
  width: 90px;
  height: 30px;
  background: #ffe600;
  border-bottom-left-radius: 50px 25px;
  border-top-color: transparent;
  border-right-color: transparent;
  position: relative;
  transform: rotate(-25deg) translateX(-48px);
  position: absolute;
  left: 50%;
  margin-left: -45px;
}
.mouth > .up > .lipLeft::before {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  position: absolute;
  right: 0px;
  top: -3px;
  background-color: #ffe600;
}
.mouth > .up > .lipRight {
  border: 3px solid black;
  width: 90px;
  height: 30px;
  background: #ffe600;
  border-bottom-right-radius: 50px 25px;
  border-top-color: transparent;
  border-left-color: transparent;
  position: relative;
  transform: rotate(25deg) translateX(48px);
  position: absolute;
  left: 50%;
  margin-left: -45px;
}
.mouth > .up > .lipRight::before {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  position: absolute;
  left: 0px;
  top: -3px;
  background-color: #ffe600;
}
.mouth > .down {
  width: 150px;
  height: 160px;
  position: absolute;
  left: 50%;
  top: 1px;
  margin-left: -75px;
  overflow: hidden;
}
.mouth > .down > .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth > .down > .yuan1 > .yuan2 {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  bottom: -20px;
  margin-left: -75px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background: #ff485f;
}
.face {
  border: 3px solid black;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #f00;
  position: absolute;
  top: 240px;
  left: 50%;
  margin-left: -44px;
}

.face > img {
  position: absolute;
  left: 50%;
  top: 50%;
}
.faceRight {
  transform: translateX(180px);
}
.faceLeft {
  transform: translateX(-180px);
}
.faceLeft > img {
  transform: rotateY(-180deg);
  transform-origin: 0 0;
}
`
export default string;
