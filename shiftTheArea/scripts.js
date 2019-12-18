console.log("shiftArea");


const items = document.querySelectorAll('.item > span > input');
let lastChecked;

function handleClick(e){
  if(e.shiftKey && lastChecked){
      let inRange = false;
      items.forEach(item=>{
        if(item.checked){
          inRange = !inRange;
        }
        if(inRange){
          item.checked = true;
        }
      })
  }
    // console.log(e.shiftKey, this.checked,lastChecked);
  lastChecked = this;
  console.log(lastChecked);
}

items.forEach(item=>{
  item.addEventListener('click',handleClick);
})

