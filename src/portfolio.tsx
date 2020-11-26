import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Yuha',
	title: 'Hello, I\'m Yuha',
	subTitle: emoji("To boldly go where no programmer has gone before 🖖"),
	role: "Web-FrontEnd Developer",
	// resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/TWO-PENCE',
	// linkedin: 'Your linkedin link',
	email: 'toromstar@gmail.com',
	// facebook: 'Your facebook link',
	// twitter: "Your twitter link",
	// instagram: "Your instagram link",
	// medium: 'Your medium link',
	// stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("SKill ⚡"),
	subTitle: "사용할 수 있는 스킬",
	describeSkills: [
		emoji("✔ HTML: 마크업 구조와 태그를 용도에 맞게 쓸 수 있습니다."),
		emoji("✔ CSS: 기초적인 퍼블리싱이 가능하며 flex 구조를 배우고 있는 중입니다."),
		emoji("✔ JS: JQuery로 애니메이션을 만들 수 있고, VanillaJS는 배우는 중입니다."),
		emoji("✔ SCSS: 문법을 배우고 실제 프로젝트에 막 적용해보는 단계입니다."),
		emoji("✔ React: Component를 구체화하는 방법을 배우고 있습니다.")
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{ fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80 },
		{ fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70 },
		{ fontAwesome: "fab fa-js", text: "JS", proficiency: 30 },
		{ fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30 },
		{ fontAwesome: "fab fa-react", text: "React", proficiency: 20 },
		// { fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20 },
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2020.03~",
			company: "Slowalk",
			role: "Front-End Developer",
		}
		// ,
		// {
		// 	date: "2018.03~",
		// 	company: "위우너스",
		// 	role: "",
		// }
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "그 동안 진행했던 프로젝트",
	lists: [
		{
			title: "YWCA",
			desc: "서브 프론트 개발자 (고정 페이지 마크업 및 퍼블리싱 및 전체 페이지 디자인 QA)",
			date: "2020. 03 ~ 2020. 04",
			url: "https://ywca.or.kr/"
		},
		{
			title: "사회공헌센터",
			desc: "서브 프론트 개발자 (고정 페이지 마크업 및 퍼블리싱)",
			date: "2020. 04 ~ 2020. 05",
			url: "https://crckorea.kr/csrcommunity/"
		},
		{
			title: "한국언론학회",
			desc: "서브 프론트 개발자 (고정 페이지 마크업 및 퍼블리싱)",
			date: "2020. 06 ~ 2020. 07",
			url: "https://comm.or.kr/"
		},
		{
			title: "용인시마을공동체지원센터",
			desc: "메인 프론트 개발자 (전체 페이지 마크업 및 퍼블리싱, 전체 페이지 QA 작업)",
			date: "2020. 08 ~ 2020. 09",
			url: "https://yongincommunity.org/"
		},
		{
			title: "너머n-성범죄끝장프로젝트",
			desc: "메인 프론트 개발자 (전체 페이지 마크업 및 퍼블리싱, 전체 페이지 QA 작업)",
			date: "2020. 10 ~ 2020. 11",
			url: "http://stopn.hani.co.kr/"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "연락",
	introduce: emoji("끊임없이 성장하고 싶은 신입 웹 개발자입니다."),
	view: true
}