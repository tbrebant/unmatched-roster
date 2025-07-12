import DATA from './data.js?v=1';
import DoDom from './DoDom.js?v=1';

const ROSTER = DATA.roster;

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
export default function start () {
  window.onload = async () => {
    let app = window.app = new App();
    app.init();
  }
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
class App extends DoDom {
  constructor () {
    super('div', { class: 'app', attachToBody: true });
    this.filters = {};
    this.fighters = {};
    this.sortAlphabetically = false;
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
    chapter.addDomText('This page lists all existing ');
    addHrefLink(chapter, 'Unmatched', 'https://boardgamegeek.com/boardgame/295564/unmatched-game-system', 'link');
    chapter.addDomText(' fighters released up to the present day (January 2024 at the time of writing). If you notice some missing or erroneous information, please open an issue (or do a PR) on ');
    addHrefLink(chapter, 'Unmatched Roster\'s GitHub', 'https://github.com/tbrebant/unmatched-roster', 'link');
    chapter.addDomText('.');
    chapter = intro.addDoDom('div');
    chapter.addDomText(' You can customize the list by clicking on ');
    chapter.addDomText('filter', { class: 'link', onClick: this.openFilterWindow.bind(this) });
    chapter.addDomText(' and modify this page\'s url to list your own selection of fighters (only the ones you own for instance).');
    chapter = intro.addDoDom('div');
    chapter.addDomText('If you want to know how good a fighter is and know more about his different matchups, you can check the Unmatched League\'s ');
    addHrefLink(chapter, 'fighter stats page', 'https://www.umleague.net/fighterstats', 'link');
    chapter.addDomText(' or search for \"Unmatched competitive tier list\" on ');
    addHrefLink(chapter, 'YouTube', 'https://www.youtube.com/results?search_query=unmatched+competitive+tier+list+', 'link');
    chapter.addDomText('.');
    intro.addDoDom('div', { text: 'This project is unofficial and is not affiliated with any of Unmatched creators or publishers. Unmatched and the Unmatched logo are trademarks of Restoration Games, LLC. Art is (c) Restoration Games, LLC. Content is used with permission.', class: 'disclaimer' });

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

    // Fighter panels wrapper
    this.fightersPanelsWrapper = this.addDoDom('div');

    // Create fighters sheets
    let index = 0;
    for (let i = 0; i < ROSTER.length; i++) {
      let fighterData = ROSTER[i];
      let id = fighterData.id;
      fighterData.releaseOrder = ++index;
      this.fighters[id] = new FighterPanel(fighterData);
    }

    // Footer
    let footer = this.addDoDom('div', { class: 'footer' });
    footer.addDomText('Project created by ');
    addHrefLink(footer, 'docteeboh', 'https://docteeboh.net', 'link');
    footer.addDomText(' with the contribution of ');
    addHrefLink(footer, 'zypheron', 'https://github.com/zypherion', 'link');
    footer.addDomText('.');


    // Retrieve url filters ans update them
    this.setFiltersFromUrl();
    this.updateSortOrder();
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
    for (let i = 0; i < ROSTER.length; i++) {
      let id = ROSTER[i].id;
      let visible = noFilter || this.filters[id];
      this.fighters[id].setVisibility(visible);
    }
    this.updateUrlFromFilters();
    this.removeFilterBtn.setVisibility(!noFilter);
  }

  //▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  clearFilters () {
    for (let i = 0; i < ROSTER.length; i++) {
      let id = ROSTER[i].id;
      this.fighters[id].setVisibility(true);
    }
    this.filters = {};
    this.sortAlphabetically = false;
    this.updateFilterWindowFromFilters();
    this.updateSortOrder();
    this.updateUrlFromFilters();
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
    if (this.sortAlphabetically) {
      url += params ? '&' : '?';
      url += 'a=' + 1;
    }
    window.history.replaceState(null, '', url);
  }

  //▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  setFiltersFromUrl () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let fighters = urlParams.get('f');
    if (fighters) {
      fighters = fighters.split(',');
      for (let id of fighters) {
        this.filters[id] = true;
      }
    }
    let sortAlphabetically = urlParams.get('a');
    if (sortAlphabetically) {
      this.sortAlphabetically = true;
    }
  }

  //▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  updateFilterWindowFromFilters () {
    for (let i = 0; i < ROSTER.length; i++) {
      let id = ROSTER[i].id;
      this.filterWindow.checkboxes[id].dom.checked = !!this.filters[id];
    }
    this.filterWindow.sortOrderCheckbox.dom.checked = this.sortAlphabetically;
  }

  //▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  updateSortOrder () {
    let sorted = [];
    for (let id in this.fighters) {
      sorted.push(this.fighters[id]);
    }
    sorted.sort((a, b) => {
      if (this.sortAlphabetically) {
        return b.fighterData.name > a.fighterData.name ? -1 : 1;
      }
      return b.fighterData.releaseOrder > a.fighterData.releaseOrder ? -1 : 1;
    });
    for (let fighterPanel of sorted) {
      if (fighterPanel.parent) {
        fighterPanel.removeFromParent();
      }
    }
    for (let fighterPanel of sorted) {
      this.fightersPanelsWrapper.appendChild(fighterPanel);
    }
    this.updateUrlFromFilters();
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
    for (let i = 0; i < ROSTER.length; i++) {
      let id = ROSTER[i].id;
      let checkbox = this.addCheckbox(this.filterWindowsContent, ROSTER[i].name, () => {
        this.filters[id] = checkbox.dom.checked;
        if (!this.filters[id]) { delete this.filters[id]; }
        this.updateListFromFilters();
      });
      this.filterWindow.checkboxes[id] = checkbox;
    }

    // Separator
    this.filterWindowsContent.addDoDom('div', { class: 'horizontalSeparator' });

    // Sort order
    this.filterWindow.sortOrderCheckbox = this.addCheckbox(this.filterWindowsContent, 'Sort alphabetically', () => {
      this.sortAlphabetically = this.filterWindow.sortOrderCheckbox.dom.checked;
      this.updateSortOrder();
    });

    // Separator
    this.filterWindowsContent.addDoDom('div', { class: 'horizontalSeparator' });


    // Buttons line
    this.filterWindowBtnLine = this.filterWindowsContent.addDoDom('div', {
      class: 'filterWindowBtnLine'
    });

    // Clear filters
    this.filterWindowBtnLine.addDoDom('span', {
      class: 'clearFilters',
      text: 'Clear filters',
      onClick: (e) => {
        this.clearFilters();
      }
    });

    // Separator
    this.filterWindowBtnLine.addDoDom('span', { text: ' - ', styles: { margin: '0 10px' } });

    // Copy url
    this.filterWindowBtnLine.addDoDom('span', {
      class: 'copyUrl',
      text: 'Copy url',
      onClick: (e) => {
        navigator.clipboard.writeText(window.location.href);
        alert('Url copied in clipboard');
      }
    });

    // Separator
    this.filterWindowBtnLine.addDoDom('span', { text: ' - ', styles: { margin: '0 10px' } });

    // Done
    this.filterWindowBtnLine.addDoDom('span', {
      class: 'doneBtn',
      text: 'Done',
      onClick: (e) => {
        this.filterWindow.hide();
      }
    });

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

  //▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  addCheckbox (parent, text, update) {
    let checkboxWrapper = parent.addDoDom('div', { class: 'filterWrapper' });
    let checkbox = checkboxWrapper.addDoDom('input', { class: 'filterCheckbox'});
    checkbox.dom.type = 'checkbox';
    checkboxWrapper.addDoDom('div', {
      text: text,
      class: 'filterCheckboxLabel',
      onClick: (e) => {
        checkbox.dom.checked = !checkbox.dom.checked;
        update();
      }
    });
    checkbox.dom.addEventListener('change', update);
    // this.filterWindow.checkboxes[id] = checkbox;
    return checkbox;
  }
}

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Class for fighter sheet
class FighterPanel extends DoDom {
  constructor (fighterData) {
    super('div', { class: 'fighterPanelWrapper' });
    let content = this.addDoDom('div', { class: 'fighterPanel' });

    this.fighterData = fighterData;

    // Card's back
    content.addDoDom('div', {
      class: 'cardBack',
      styles: {
        backgroundImage: `url(${fighterData.back})`
      }
    });

    // Mini(s)
    let initialMini = fighterData.minis[0];
    let mini = content.addDoDom('div', {
      class: 'minis', styles: { backgroundImage: `url(${initialMini})` }
    });
    if (fighterData.minis.length > 1) {
      let miniIndex = 0;
      mini.addDoDom('div', { class: 'miniArrowLeft', onClick: () => {
        miniIndex = (miniIndex - 1 + fighterData.minis.length) % fighterData.minis.length;
        mini.setStyles({ backgroundImage: `url(${fighterData.minis[miniIndex]})` });
      }});
      mini.addDoDom('div', { class: 'miniArrowRight', onClick: () => {
        miniIndex = (miniIndex + 1) % fighterData.minis.length;
        mini.setStyles({ backgroundImage: `url(${fighterData.minis[miniIndex]})` });
      }});
    }

    // Right information area
    let infoBlock = content.addDoDom('div', { class: 'infoBlock' });

    // Title with its diagonal design
    infoBlock.addDoDom('div', { class: 'dynamic' });
    infoBlock.addDoDom('div', { class: 'fighterName', text: fighterData.name });

    // Description
    if (fighterData.desc) {
      infoBlock.addDoDom('div', { html: fighterData.desc, class: 'fighterDesc' });
    }

    // Ability
    if (fighterData.ability) {
      infoBlock.addDoDom('div', { html: 'Ability: ' + fighterData.ability, class: 'fighterAbility' });
    }

    // Guides
    if (fighterData.guides) {
      let guides = infoBlock.addDoDom('div', { class: 'fighterGuides' });
      guides.addDomText('Strategy guide(s): ');
      for (let i = 0; i < fighterData.guides.length; i++) {
        if (i > 0) { guides.addDomText(', '); }
        addHrefLink(guides, fighterData.guides[i].name, fighterData.guides[i].url, 'guideLink');
      }
    }

    // More button
    let moreButton = content.addDoDom('div', {
      text: '. . .',
      class: 'more',
      onClick: () => {
        moreButton.isOpened = !moreButton.isOpened;
        additionalContent.setVisibility(moreButton.isOpened);
        moreButton.setHTML(moreButton.isOpened ? '&nbsp;₋&nbsp;' : '. . .');
      }
    });
    moreButton.isOpened = false;

    // Additional content
    let additionalContent = infoBlock.addDoDom('div', { class: 'additionalContent', visible: false });
    
    // Set
    if (fighterData.set && fighterData.set[0]) {
      let set = additionalContent.addDoDom('div', { text: 'Set: ', class: 'fighterSet' });
      addHrefLink(set, fighterData.set[0], fighterData.set[1], 'guideLink');
    }

    // Deck details
    if (fighterData.deck) {
      let deckDetails = additionalContent.addDoDom('div', { text: 'Deck details: ', class: 'fighterDeck' });
      addHrefLink(deckDetails, 'Unmatched Database', fighterData.deck, 'guideLink');
    }

    // Lore
    if (fighterData.deck) {
      let deckDetails = additionalContent.addDoDom('div', { text: 'History: ', class: 'fighterLore' });
      addHrefLink(deckDetails, fighterData.lore.name || 'Wikipedia', fighterData.lore.url || fighterData.lore, 'guideLink');
    }
  }
}

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Helpers
function addHrefLink (parent, text, url, className) {
  let link = parent.addDoDom('a', { text: text, class: className });
  link.dom.href = url;
  link.dom.target = '_blank';
}
