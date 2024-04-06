import utils from "./utils";
/*-----------------------------------------------
|   Isotope
-----------------------------------------------*/

const isotopeInit = () => {

  if (window.Isotope) {

    const masonryItems = document.querySelectorAll("[data-isotope]");

    masonryItems.length && masonryItems.forEach((masonryItem) => {

      window.imagesLoaded(masonryItem, ()=>{
        const userOptions = utils.getData(masonryItem, "masonry");
        const defaultOptions = { 
          itemSelector: '.masonry-item',
          layoutMode: 'packery',
        };
        const options = window._.merge(defaultOptions, userOptions);
        const isotope = new window.Isotope(masonryItem, options);
  
  
        //--------- filter -----------------
        const filterElement = document.querySelector('[data-filter-nav]')  
        filterElement?.addEventListener('click', function(e){
          const item = e.target.dataset.filter;   
          isotope.arrange({ filter: item });
          document.querySelectorAll('[data-filter]').forEach(el =>{
            el.classList.remove('active')  
          })
          e.target.classList.add('active')
        })
        //---------- filter end ------------
      
        return isotope;
      })

    });

   

  }
};

export default isotopeInit;
