document.addEventListener('DOMContentLoaded', function () {
	//hiding home section
	const homeHiding = () => {
		const home = document.querySelector('.home')
		const header = document.querySelector('#header')
		let headerHeight = header.offsetHeight
		let viewportHeight = window.innerHeight
		if (headerHeight > viewportHeight / 2.5) {
			home.classList.add('d-none')
		} else {
			home.classList.remove('d-none')
		}
	}
	window.addEventListener('load', homeHiding)
	window.addEventListener('resize', homeHiding)

	//hiding nav
	const nav = document.querySelector('.navbar-collapse')
	document.addEventListener('click', () => {
		if (nav.classList.contains('show')) {
			nav.classList.remove('show')
		}
	})

	// navbar changing background-color by scrollY
	const navbar = document.querySelector('.navbar')
	const navLogoSm = document.querySelector('.navbar__logotype--small')
	const navbarChange = () => {
		let viewportWidth = window.innerWidth
		let viewportHeight = window.innerHeight
		let scrollY = window.scrollY
		if (viewportWidth <= 576) {
			if (scrollY > viewportHeight * 0.4) {
				navbar.classList.add('nav-bg')
				navLogoSm.classList.remove('txt-2')
			} else {
				navbar.classList.remove('nav-bg')
				navLogoSm.classList.add('txt-2')
			}
		} else if (viewportWidth > 576) {
			if (scrollY > viewportHeight * 0.15) {
				navbar.classList.add('bg-sm-dark')
				navLogoSm.classList.remove('txt-2')
			} else {
				navbar.classList.remove('bg-sm-dark')
				navLogoSm.classList.add('txt-2')
			}
		}
	}
	window.addEventListener('scroll', navbarChange)

	//scroll-bar
	let root = document.querySelector(':root')
	const handleScrollbar = () => {
		let viewportHeight = window.innerHeight
		let bodyHeight = document.body.offsetHeight
		let header = document.getElementById('header')
		let headerHeight = header.offsetHeight
		let scroll = window.scrollY - headerHeight - 5
		let fullScroll = bodyHeight - viewportHeight - headerHeight
		let scrollbarWidth
		scrollbarWidth = (scroll / fullScroll) * 95
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
