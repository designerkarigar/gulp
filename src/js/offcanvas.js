/* -------------------------------------------------------------------------- */
/*                                   Offcanvas                                  */
/* -------------------------------------------------------------------------- */

const offcanvasInit = () => {
    const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    offcanvasElementList.map(function (offcanvasEl) {
        return new window.bootstrap.Offcanvas(offcanvasEl)
    })
};

export default offcanvasInit;