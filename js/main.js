function removingChildSelectors( parentElement, selector ) {
    if ( parentElement.childElementCount > 0 ) {
        for ( var i = 0; i < parentElement.childElementCount; i++ ) {
            var child = parentElement.children[i];
            if ( child.classList.contains( selector ) ) {
                child.classList.remove( selector );
            }
        }
    }
}

function addAttrValue( element, value ){
    element.classList.add( value );
}

const btns = document.getElementById("buttons1");
let btn1 = document.getElementById( "btn1" ),
    btn2 = document.getElementById( "btn2" ),
    btn3 = document.getElementById( "btn3" ),
    btn4 = document.getElementById( "btn4" );

const srvs = document.getElementById("services1");
let srv1 = srvs.children[0],
    srv2 = srvs.children[1],
    srv3 = srvs.children[2],
    srv4 = srvs.children[3];

btn1.addEventListener( "click", () => {
    removingChildSelectors( btns, "block-buttons__btn_selected" );
    removingChildSelectors( srvs, "box-about-services_selected" );
    addAttrValue( btn1, "block-buttons__btn_selected" );
    addAttrValue( srv1, "box-about-services_selected");
} );
btn2.addEventListener( "click", () => {
    removingChildSelectors( btns, "block-buttons__btn_selected" );
    removingChildSelectors( srvs, "box-about-services_selected" );
    addAttrValue( btn2, "block-buttons__btn_selected" );
    addAttrValue( srv2, "box-about-services_selected");
} );
btn3.addEventListener( "click", () => {
    removingChildSelectors( btns, "block-buttons__btn_selected" );
    removingChildSelectors( srvs, "box-about-services_selected" );
    addAttrValue( btn3, "block-buttons__btn_selected" );
    addAttrValue( srv3, "box-about-services_selected");
} );
btn4.addEventListener( "click", () => {
    removingChildSelectors( btns, "block-buttons__btn_selected" );
    removingChildSelectors( srvs, "box-about-services_selected" );
    addAttrValue( btn4, "block-buttons__btn_selected" );
    addAttrValue( srv4, "box-about-services_selected");
} );
