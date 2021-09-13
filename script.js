function openDropdown(){
    let dropdownMenu = document.getElementById("dropdown-menu")
    let dropdownButton = document.getElementById("dropdown-button")
    
    if(dropdownMenu.style.display == "flex"){
        dropdownMenu.style.display = "none"

    }else{
        dropdownMenu.style.display = "flex"
        dropdownButton.style.color = "#f0efed"
    }
}

function openCartModal(){
    let modal = document.getElementById("cart-modal")
    let modalContainer = document.getElementById("cart-modal-container")

        modal.style.display = "block"
        modalContainer.style.right = "0"
}

function closeCartModal(){
    let modal = document.getElementById("cart-modal")
    let modalContainer = document.getElementById("cart-modal-container")

    modal.style.display = "none"
    modalContainer.style.right = "-350px"

}

function changeButton(){
    let button = document.getElementById("form-submit-btn")
    let input = document.getElementById("form-email-input")
    
    if(input.value != ""){
        button.style.background = "#ff8b68"
        button.style.cursor = "pointer"
    }else{
        button.style.background = "#efc2b396"
        button.style.cursor = "default"
    }
}

