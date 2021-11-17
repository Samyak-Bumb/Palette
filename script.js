let themeSwitch=document.querySelector(".theme-switch"),
    colors=document.querySelectorAll(".color"),
    palette=document.querySelector(".palette"),
    hex="abcdef123456789";

themeSwitch.addEventListener("click",()=>{
  document.querySelectorAll(".theme-icon").forEach((icon)=>{
    if(icon.classList.contains("active")){
      icon.classList.remove("active");
      document.body.classList.toggle("light");
    }
    else icon.classList.add("active");
  });
});

let randHex=()=>{
  let hexString="#";
  for(let i=0; i < 6; i++){
    hexString+=hex[Math.round(Math.random() * 6)];
  }
  return hexString;
};

const copyToClipboard=(str)=>{
  let el=document.querySelector("textarea");
  el.value=str;
  el.select();
  el.setSelectionRange(0, 99999);

  document.execCommand("copy");
};

let generate=()=>{
  colors.forEach((color)=>{
    color.style.backgroundColor=randHex();
  });
};
generate();

document.querySelector(".btn").addEventListener("click", generate);

document.addEventListener("keypress",(e)=>{
  if(e.keyCode =="32"){
    generate();
  }
  else(e.keyCode ==="13")
    generate();
});

palette.addEventListener("click",(e)=>{
  if(e.target.classList.contains("color")){
    let color=e.target;
    copyToClipboard(window.getComputedStyle(color).backgroundColor);
    document.querySelector(".notification").classList.remove("close");
    setTimeout(()=>{
      document.querySelector(".notification").classList.add("close");
    }, 1800);
  }
});