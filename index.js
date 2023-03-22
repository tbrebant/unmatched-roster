import DATA from './data.js';
import DoDom from './DoDom.js';

const ROSTER = DATA.roster;

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
export default function start () {
	window.onload = async () => {
		let app = new App();
		app.init();
	}
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
class App extends DoDom {
	constructor () {
		super('div', { class: 'app', attachToBody: true });
		this.filters = {};
		this.fighters = {};
	}

	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	async init () {
		// Header and title
		let header = this.addDoDom('div', { class: 'header' });
		let headerContainer = header.addDoDom('div', { class: 'headerContainer' });
		headerContainer.addDoDom('div', { class: 'unmatchedLogo' });
		headerContainer.addDoDom('div', { class: 'rosterLogo', text: 'ROSTER' });
		headerContainer.addDoDom('div', { class: 'advanced', text: 'Filter', onClick: this.openFilterWindow.bind(this) });

		// Introduction
		let intro = this.addDoDom('div', { class: 'intro' });
		let chapter = intro.addDoDom('div');
		chapter.addDomText('This page lists all existing Unmatched fighters released up to the present day (March 2023 at the time of writing). If you notice some missing or erroneous information, please open an issue (or do a PR) on ');
		addHrefLink(chapter, 'Unmatched Roster\'s GitHub', 'https://github.com/tbrebant/unmatched-roster', 'link');
		chapter.addDomText('.');
		chapter = intro.addDoDom('div');
		chapter.addDomText(' You can customize the list by clicking on ');
		chapter.addDomText('filter', { class: 'link', onClick: this.openFilterWindow.bind(this) });
		chapter.addDomText(' and modify this page\'s url to list your own selection of fighters (only the ones you own for instance).');
		chapter = intro.addDoDom('div');
		chapter.addDomText('If you want to know how good a fighter is and know more about his different matchups, you can check the Unmatched League\'s ');
		addHrefLink(chapter, 'fighter stats page', 'https://www.umleague.net/fighterstats', 'link');
		chapter.addDomText(' or search for \"Unmatched tier list\" on ');
		addHrefLink(chapter, 'YouTube', 'https://www.youtube.com/results?search_query=unmatched+tier+list+&sp=CAI%253D', 'link');
		chapter.addDomText('.');
		intro.addDoDom('div', { text: ' This project is unofficial and is not affiliated with any of Unmatched creators or publishers. Unmatched and the Unmatched logo are trademarks of Restoration Games, LLC. Art is (c) Restoration Games, LLC. Content is used with permission.' });

		// Disclaimer when page is currently filtered + button to remove the filter
		this.removeFilterBtn = this.addDoDom('div', {
			class: 'removeFilterBtn',
			text: '- Filtered selection, click to remove -',
			visible: false,
			onClick: () => {
				this.filters = {};
				this.updateListFromFilters();
			}
		});

		// Create fighters sheets
		for (let id in ROSTER) {
			let figherData = ROSTER[id];
			figherData.id = id;
			this.fighters[id] = this.appendChild(new FighterPanel(figherData));
		}

		// Footer
		this.addDoDom('div', {
			class: 'footer',
			text: 'Unmatched and the Unmatched logo are trademarks of Restoration Games, LLC. Art is (c) Restoration Games, LLC. Content is used with permission.'
		});

		// Retrieve url filters ans update them
		this.setFiltersFromUrl();
		this.updateListFromFilters();
	}

	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	openFilterWindow () {
		this.createFilterWindow();
		this.updateFilterWindowFromFilters();
		this.filterWindow.show();
	}

	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	updateListFromFilters () {
		const noFilter = !Object.keys(this.filters).length;
		for (let id in ROSTER) {
			let visible = noFilter || this.filters[id];
			this.fighters[id].setVisibility(visible);
		}
		this.updateUrlFromFilters();
		this.removeFilterBtn.setVisibility(!noFilter);
	}

	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	updateUrlFromFilters () {
		let url = location.protocol + '//' + location.host + location.pathname;
		let params = '';
		for (let id in this.filters) {
			if (params) { params += ','; }
			params += id;
		}
		if (params) {
			url = url + '?f=' + params;
		}
		window.history.replaceState(null, '', url);
	}

	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	setFiltersFromUrl () {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		let fighters = urlParams.get('f');
		if (!fighters) { return; }
		fighters = fighters.split(',');
		for (let id of fighters) {
			this.filters[id] = true;
		}
	}

	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	updateFilterWindowFromFilters () {
		for (let id in ROSTER) {
			this.filterWindow.checkboxes[id].dom.checked = !!this.filters[id];
		}
	}

	//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	createFilterWindow () {
		if (this.filterWindow) { return; }

		// Dimmed area behind poup
		this.filterWindow = this.addDoDom('div', {
			class: 'filterWindowBg',
			onClick: () => { this.filterWindow.hide(); }
		});

		// Actual popup
		this.filterWindowsContent = this.filterWindow.addDoDom('div', {
			class: 'filterWindowsContent',
			onClick: (e) => { e.stopPropagation(); }
		});

		// Title
		this.filterWindowsContent.addDoDom('div', { text: 'Filter', class: 'filterTitle' });

		// Checkboxes
		this.filterWindow.checkboxes = {};
		for (let id in ROSTER) {
			let checkboxWrapper = this.filterWindowsContent.addDoDom('div', { class: 'filterWrapper' });
			let checkbox = checkboxWrapper.addDoDom('input', { class: 'filterCheckbox'});
			checkbox.dom.type = 'checkbox';
			let update = () => {
				this.filters[id] = checkbox.dom.checked;
				if (!this.filters[id]) { delete this.filters[id]; }
				this.updateListFromFilters();
			};
			checkboxWrapper.addDoDom('div', {
				text: ROSTER[id].name,
				class: 'filterCheckboxLabel',
				onClick: (e) => {
					checkbox.dom.checked = !checkbox.dom.checked;
					update();
				}
			});
			checkbox.dom.addEventListener('change', update);
			this.filterWindow.checkboxes[id] = checkbox;
		}

		// Close popup button
		let closeIconCode = '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 512 512"><title>ionicons-v5-m</title><path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:16px"/><line x1="320" y1="320" x2="192" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:16px"/><line x1="192" y1="320" x2="320" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:16px"/></svg>';
		let closeIcon = this.filterWindowsContent.addDoDom('div', {
			html: closeIconCode,
			class: 'closeIcon',
			onClick: () => {
				this.filterWindow.hide();
			}
		});
	}
}

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Class for fighter sheet
class FighterPanel extends DoDom {
	constructor (figherData) {
		super('div', { class: 'fighterPanel' });
		this.figherData = figherData;

		// Card's back
		this.addDoDom('div', {
			class: 'cardBack',
			styles: {
				backgroundImage: `url(${figherData.back})`
			}
		});

		// Mini(s)
		let initialMini = figherData.minis[0];
		let mini = this.addDoDom('div', {
			class: 'minis', styles: { backgroundImage: `url(${initialMini})` }
		});
		if (figherData.minis.length > 1) {
			let miniIndex = 0;
			mini.addDoDom('div', { class: 'miniArrowLeft', onClick: () => {
				miniIndex = (miniIndex - 1 + figherData.minis.length) % figherData.minis.length;
				mini.setStyles({ backgroundImage: `url(${figherData.minis[miniIndex]})` });
			}});
			mini.addDoDom('div', { class: 'miniArrowRight', onClick: () => {
				miniIndex = (miniIndex + 1) % figherData.minis.length;
				mini.setStyles({ backgroundImage: `url(${figherData.minis[miniIndex]})` });
			}});
		}

		// Right information area
		let infoBlock = this.addDoDom('div', { class: 'infoBlock' });

		// Title with its diagonal design
		infoBlock.addDoDom('div', { class: 'dynamic' });
		infoBlock.addDoDom('div', { class: 'fighterName', text: figherData.name });

		// Description
		if (figherData.desc) {
			infoBlock.addDoDom('div', { html: figherData.desc, class: 'fighterDesc' });
		}

		// Ability
		if (figherData.ability) {
			infoBlock.addDoDom('div', { html: 'Ability: ' + figherData.ability, class: 'fighterAbility' });
		}

		// Guides
		if (figherData.guides) {
			let guides = infoBlock.addDoDom('div', { class: 'fighterGuides' });
			guides.addDomText('Strategy guide(s): ');
			for (let i = 0; i < figherData.guides.length; i++) {
				if (i > 0) { guides.addDomText(', '); }
				addHrefLink(guides, figherData.guides[i].name, figherData.guides[i].url, 'guideLink');
			}
		}
	}
}

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Helper
function addHrefLink (parent, text, url, className) {
	let link = parent.addDoDom('a', { text: text, class: className });
	link.dom.href = url;
	link.dom.target = '_blank';
}
