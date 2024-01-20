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
		let viewportHeight = window.innerHeight
		let scrollY = window.scrollY
		if (viewportWidth <= 576) {
			if (scrollY > viewportHeight * 0.4) {
				addNavBg()
			} else {
				removeNavBg()
			}
		} else if (viewportWidth > 576 && viewportWidth < 992) {
			if (scrollY > viewportHeight * 0.15) {
				addNavBg()
			} else {
				removeNavBg()
			}
		} else if (viewportWidth >= 992) {
			if (scrollY > viewportHeight * 0.25) {
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
		'<h2 class="d-flex justify-content-center align-items-center m-0">Moja Edukacja <i class="bi bi-chevron-down ms-3 fs-1 chevron-btn"></i></h2>'
	const btnContentChange = () => {
		stackEduBtn.innerHTML =
			stackEduBtn.innerHTML ===
			'<h2 class="d-flex justify-content-center align-items-center m-0">Moja Edukacja <i class="bi bi-chevron-down ms-3 fs-1 chevron-btn"></i></h2>'
				? '<a href="#stack"><h2 class="d-flex justify-content-center align-items-center m-0">Zwiń <i class="bi bi-chevron-up ms-3 fs-1 chevron-btn"></i></h2></a>'
				: '<h2 class="d-flex justify-content-center align-items-center m-0">Moja Edukacja <i class="bi bi-chevron-down ms-3 fs-1 chevron-btn"></i></h2>'
	}
	const showStackEdu = () => {
		if (
			stackEduBtn.innerHTML ===
			'<h2 class="d-flex justify-content-center align-items-center m-0">Moja Edukacja <i class="bi bi-chevron-down ms-3 fs-1 chevron-btn"></i></h2>'
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
	const pCardForest = document.querySelector('.p-card-forest')
	const pCardInfo = document.querySelector('.p-card-info')
	const pCardPragmaton = document.querySelector('.p-card-pragmaton')
	const pCardLifestyle = document.querySelector('.p-card-lifestyle')

	const projectsBtns = document.querySelectorAll('.projects-btn')
	const pBtnForest = document.querySelector('.p-btn-forest')
	const pBtnInfo = document.querySelector('.p-btn-info')
	const pBtnPragmaton = document.querySelector('.p-btn-pragmaton')
	const pBtnLifestyle = document.querySelector('.p-btn-lifestyle')

	const resetTab = () => {
		projectsCards.forEach(card => card.classList.add('d-none'))
		projectsBtns.forEach(btn => btn.classList.remove('btn-active'))
	}
	const showTab = (btn, card) => {
		btn.classList.add('btn-active')
		card.classList.remove('d-none')
	}

	projectsBtns.forEach(btn => btn.addEventListener('click', resetTab))
	pBtnForest.addEventListener('click', () => showTab(pBtnForest, pCardForest))
	pBtnInfo.addEventListener('click', () => showTab(pBtnInfo, pCardInfo))
	pBtnPragmaton.addEventListener('click', () => showTab(pBtnPragmaton, pCardPragmaton))
	pBtnLifestyle.addEventListener('click', () => showTab(pBtnLifestyle, pCardLifestyle))

	//footer
	const footerYear = document.querySelector('.footer__year')
	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerYear.innerText = year
	}
	handleCurrentYear()
})
