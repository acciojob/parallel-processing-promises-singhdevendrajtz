//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
let prom_arr=[]
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// let new_el1=document.createElement("button");

btn.addEventListener('click',function(){
let new_el=document.createElement("div");
new_el.id="loading";
new_el.class="spinner"
new_el.innerHTML="Loading..."
output.appendChild(new_el)
promise1= fetch(images[0].url);
promise2= fetch(images[1].url);
promise3= fetch(images[2].url);	


Promise.all([promise1,promise2,promise3]).then((data)=>{
	output.innerHTML="";
	for(let x=0;x<data.length;x++)
		{
		let src=data[x];
			console.log(src)
			let el=document.createElement("img");
			el.style.width="200px";
			el.style.height="300px";
			el.src=`${src}`
			output.appendChild(el)
			// output.innerHTML
		}
}).catch((error)=>{
	
	let elems=document.createElement("div");
	elems.id="error"
	elems.innerHTML=`${error}`
	output.appendChild(elems);
});
});
