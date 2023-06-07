/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')

async function fetchData(api) {
    const response = await fetch(api);
    const data = await response.json();
    return data;
}

const formaPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)

    return newPrice;
}


(async () => {
    try {
        const response = await fetchData(`${urlBase}/api/avo`)
        let nodes = []

        response.data.map( avo => {

            const container = document.createElement('div')
            container.className = "bg-white shadow-md rounded-lg p-4 container cursor-pointer"

            // node of img
            const nodeImg = document.createElement('img');
            nodeImg.src = `${urlBase}${avo.image}`;   
            nodeImg.className = "w-full mb-2 rounded-full"; 

            // node of titlee
            const nodeTitle = document.createElement('h2');
            nodeTitle.append(document.createTextNode(avo.name));
            nodeTitle.className = "text-xl font-bold mb-2";

            // node of price
            const nodePrice = document.createElement('div');
            nodePrice.append(document.createTextNode(formaPrice(avo.price)));
            nodeTitle.className = "text-lg font-semibold";

            container.append(nodeImg, nodeTitle, nodePrice)

            nodes.push(container)
        })
        
        appNode.append(...nodes)
    
    } catch (error) {
        throw new Error(error)
    }
})();


