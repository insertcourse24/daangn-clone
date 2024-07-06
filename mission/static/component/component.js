console.log("start component.js");

cstElementArr = [
  ["card-comp", "/mission/static/component/card.html"],
  ["keyword-comp","/mission/static/component/keywords.html"]
];

cstElementArr.forEach(([componentName, componentPath]) => {
  customElements.define(
    componentName,
    class extends HTMLElement {
      constructor() {
        super();
        fetch(componentPath)
          .then((response) => response.text())
          .then((html) => {
            this.innerHTML = html;
            if(componentName == 'card-comp'){
            this.querySelector(".card-title").innerHTML = this.getAttribute("title");
            this.querySelector(".card-price").innerHTML = this.getAttribute("price");
            this.querySelector(".card-region-name").innerHTML = this.getAttribute("region-name");
            this.querySelector("img").src = this.getAttribute("imgSrc");}
            
            else if(componentName = 'keyword-comp'){
              this.querySelector("a").innerHTML = this.getAttribute("text");
            }
          })
          .catch((error) => {
            console.error(`Error fetching ${componentPath}:`, error);
          });
      }
    }
  );
});