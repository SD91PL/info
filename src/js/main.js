document.addEventListener('DOMContentLoaded', function () {
	//hiding home section
	const homeHiding = () => {
		const home = document.querySelector('.home')
		const header = document.querySelector('#header')
		let headerHeight = header.offsetHeight
		let viewportHeight = window.innerHeight
		if (headerHeight > viewportHeight / 2) {
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
	const headerElement = document.querySelector('header')
	const navbar = document.querySelector('.navbar')
	const navLogoSm = document.querySelector('.navbar__logotype--small')
	const addNavBg = () => {
		navbar.classList.add('nav-bg')
		navLogoSm.classList.remove('txt-2')
	}
	const removeNavBg = () => {
		navbar.classList.remove('nav-bg')
		navLogoSm.classList.add('txt-2')
	}
	const navbarChange = () => {
		let viewportWidth = window.innerWidth
		let headerHeight = headerElement.clientHeight
		let scrollY = window.scrollY
		if (viewportWidth < 992) {
			if (scrollY >= headerHeight) {
				addNavBg()
			} else {
				removeNavBg()
			}
		} else if (viewportWidth >= 992) {
			if (scrollY >= headerHeight * 0.8) {
				addNavBg()
			} else {
				removeNavBg()
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
		scrollbarWidth = (scroll / fullScroll) * 99
		scrollbarWidth = scrollbarWidth.toFixed(3)
		root.style.setProperty('--scroll-width', `${scrollbarWidth}%`)
	}
	window.addEventListener('scroll', handleScrollbar)

	//bootstrap tooltips
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

	// stack-edu - button - display
	const stackEduSection = document.querySelector('.stack-edu')
	const stackEduBtn = document.querySelector('.stack-edu-btn')
	stackEduBtn.innerHTML =
		'<h2 class="d-flex justify-content-center align-items-center m-0">Ukończone kursy <i class="bi bi-chevron-down ms-3 fs-1"></i></h2>'
	const btnContentChange = () => {
		stackEduBtn.innerHTML =
			stackEduBtn.innerHTML ===
			'<h2 class="d-flex justify-content-center align-items-center m-0">Ukończone kursy <i class="bi bi-chevron-down ms-3 fs-1"></i></h2>'
				? '<a href="#stack"><h2 class="d-flex justify-content-center align-items-center m-0">Zwiń <i class="bi bi-chevron-up ms-3 fs-1"></i></h2></a>'
				: '<h2 class="d-flex justify-content-center align-items-center m-0">Ukończone kursy <i class="bi bi-chevron-down ms-3 fs-1"></i></h2>'
	}
	const showStackEdu = () => {
		if (
			stackEduBtn.innerHTML ===
			'<h2 class="d-flex justify-content-center align-items-center m-0">Ukończone kursy <i class="bi bi-chevron-down ms-3 fs-1"></i></h2>'
		) {
			stackEduSection.classList.remove('d-none')
			btnContentChange()
		} else {
			stackEduSection.classList.add('d-none')
			btnContentChange()
		}
	}
	stackEduBtn.addEventListener('click', showStackEdu)

	// projects - menu tabs

	const projectsCards = document.querySelectorAll('.projects-card')
	const projectsBtnsContainer = document.querySelector('.projects-btns') //  Common parent

	const resetTab = () => {
		projectsCards.forEach(card => card.classList.add('d-none')) // Hide all cards
		const activeButtons = projectsBtnsContainer.querySelectorAll('.projects-btn.btn-active')
		activeButtons.forEach(btn => btn.classList.remove('btn-active')) // Remove 'active' class from all buttons
	}

	const showTab = (btn, card) => {
		btn.classList.add('btn-active') // Set the clicked button as active
		card.classList.remove('d-none') // Show the corresponding card
	}

	projectsBtnsContainer.addEventListener('click', event => {
		// Find the nearest .projects-btn element
		const btn = event.target.closest('.projects-btn')
		if (!btn) return // If something else is clicked, ignore it

		// Find the matching card
		const projectType = btn.classList.contains('p-btn-info')
			? 'info'
			: btn.classList.contains('p-btn-pragmaton')
			? 'pragmaton'
			: btn.classList.contains('p-btn-psvita')
			? 'psvita'
			: btn.classList.contains('p-btn-todo')
			? 'todo'
			: null

		if (!projectType) return

		const card = document.querySelector(`.p-card-${projectType}`)

		// Reset all tabs and show the new one
		resetTab()
		showTab(btn, card)
	})

	// Initialize Slick slider after setting up event listeners
	$('.projects-btns').slick({
		arrows: false,
		autoplay: true,
		speed: 1000,
		centerMode: true,
		autoplaySpeed: 3200,
		mobileFirst: true,
		variableWidth: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	})
})
