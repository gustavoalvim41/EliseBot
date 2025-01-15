const sectionhero = document.querySelector('.hero')
const footerInformation = document.querySelector('.information')

const btnDiscord = document.querySelector('.btn-discord')
btnDiscord.addEventListener("click", function () {
	location.href=''
})

const btnCommands = document.querySelector('.btn-secondary')
btnCommands.addEventListener('click', function () {
	loadingCommands()
})
