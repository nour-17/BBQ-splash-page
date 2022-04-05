let form = document.getElementById('emailCollector')
form.addEventListener("submit", event => {
    event.preventDefault()
    let ourFormData = new FormData(event.target)
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
        
    let updatedHtmlContent = 
    `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="permission-text">You will get weekly BBQ tips sent to: ${userEmailAddress}</p> 
        
    `
    let updatedContentContainer = document.getElementById("Main-Content")
    updatedContentContainer.innerHTML = updatedHtmlContent
})