const sectionhero = document.querySelector('.hero')
const sectionCommands = document.querySelector('.commands')
const loading = document.querySelector('.loading')
const footerInformation = document.querySelector('.information')
const footerCredits = document.querySelector('.credits')

const btnDiscord = document.querySelector('.btn-discord')
btnDiscord.addEventListener("click", function () {
	location.href='https://discord.com/api/oauth2/authorize?client_id=1025212351517040692&permissions=8&scope=bot'
})

const btnCommands = document.querySelector('.btn-secondary')
btnCommands.addEventListener('click', function () {
	loadingCommands()
})

const loadingCommands = () => {
	loading.classList.remove('invisible')
	sectionhero.classList.add('invisible')
	footerInformation.classList.add('invisible')
    setTimeout(showCommands, 1000 * 1.5)
}

const showCommands = () => {
	sectionCommands.classList.remove('invisible')
	footerCredits.classList.remove('invisible')
	loading.classList.add('invisible')
}
