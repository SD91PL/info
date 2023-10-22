document.addEventListener('DOMContentLoaded', function () {
	//hiding nav
	const nav = document.querySelector('.navbar-collapse')
	document.addEventListener('click', () => {
		if (nav.classList.contains('show')) {
			nav.classList.remove('show')
		}
	})

	//scroll-bar
	let root = document.querySelector(':root')
	const handleScrollbar = () => {
		let scroll = window.scrollY
		let viewportHeight = window.innerHeight
		let bodyHeight = document.body.offsetHeight
		let fullScroll = bodyHeight - viewportHeight
		let scrollbarWidth
		scrollbarWidth = ((scroll / fullScroll) - 0.25) * 150  // 0.25 value to change, when website become higher - maybe to 0.15
		scrollbarWidth = scrollbarWidth.toFixed(3)
		root.style.setProperty('--scroll-width', `${scrollbarWidth}%`)
	}
	window.addEventListener('scroll', handleScrollbar)

	//bootstrap tooltips
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

	//footer
	const footerYear = document.querySelector('.footer__year')
	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerYear.innerText = year
	}
	handleCurrentYear()
})
