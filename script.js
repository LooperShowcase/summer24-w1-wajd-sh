function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);

  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

const fakePic = "https://thispersondoesnotexist.com/";
const imgContainer = document.getElementById("images");
const resContainer = document.getElementById("result");

function draw() {

  imgContainer.innerHTML="";
  resContainer.innerHTML="";

  const randomBool = Math.random() > 0.5;
  const arr = [randomBool, !randomBool];
  const again = document.createElement("button");
  again.innerHTML = "play again!";
  again.onclick = draw;

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPic() : fakePic;

    img.onclick = function () {
      if (isReal) {
        resContainer.innerHTML = "mabrook :D";
      } else {
        resContainer.innerHTML = "false:(";
      }
      resContainer.appendChild(again);
    };

    imgContainer.appendChild(img);
    
  }
}
draw();
