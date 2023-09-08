<script lang="ts">
	import { push } from 'svelte-spa-router';

	// UI5  Components
	import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
	import '@ui5/webcomponents-base/dist/features/F6Navigation';
	import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection.js';

	import '@ui5/webcomponents/dist/Button';
	import '@ui5/webcomponents/dist/Input';
	import '@ui5/webcomponents/dist/DatePicker';
	import '@ui5/webcomponents/dist/Panel';
	import '@ui5/webcomponents/dist/Dialog';
	import '@ui5/webcomponents/dist/TextArea';
	import '@ui5/webcomponents/dist/Popover';
	import '@ui5/webcomponents/dist/Tab';
	import '@ui5/webcomponents/dist/TabContainer';
	import '@ui5/webcomponents-fiori/dist/SideNavigation';
	import '@ui5/webcomponents-fiori/dist/SideNavigationItem';
	import '@ui5/webcomponents-fiori/dist/ShellBar';
	import '@ui5/webcomponents-fiori/dist/ShellBarItem';
	import '@ui5/webcomponents-fiori/dist/Assets.js';
	import '@ui5/webcomponents/dist/Switch';
	import '@ui5/webcomponents-icons/dist/palette.js';
	import '@ui5/webcomponents-icons/dist/menu.js';
	import '@ui5/webcomponents-icons/dist/activate.js';
	import '@ui5/webcomponents-icons/dist/settings.js';
	import '@ui5/webcomponents-icons/dist/sys-help.js';
	import '@ui5/webcomponents-icons/dist/log.js';
	import '@ui5/webcomponents-icons/dist/account.js';
	import '@ui5/webcomponents-icons/dist/private.js';
	import '@ui5/webcomponents-icons/dist/loan.js';
	import '@ui5/webcomponents-icons/dist/globe.js';
	import logo from './assets/imgs/Accenture-Emblem.png';
	import Routes from '../routes.svelte';

	setTheme('sap_fiori_3_dark');

	export let menu: any = [];

	export let shellBarTitle: string = '';
	export let user: any;
	$: collapsed: any = !collapsed ?? true;

	// Elements
	let themeSettingsPopover;
	let menuPopover;
	let profileSettingsPopover;

	// Event Handlers
	const handleMenuToggle = event => {
		menuPopover.showAt(event.detail.targetRef);
	};

	const handleMenuChange = event => {
		push(event.detail.selectedItems[0].getAttribute('data-key'));
		menuPopover.close();
	};

	const handleThemeSettingsToggle = event => {
		themeSettingsPopover.showAt(event.detail.targetRef);
	};

	const handleThemeChange = event => {
		setTheme(event.detail.selectedItems[0].getAttribute('data-theme'));
		themeSettingsPopover.close();
	};

	const handleProfileClick = event => {
		profileSettingsPopover.showAt(event.detail.targetRef);
	};

	const handleProfileSettingsSelect = event => {
		const selectedKey = event.detail.item.getAttribute('data-key');
		if (selectedKey === 'settings') {
			window['settings-dialog'].show(event.detail.targetRef);
		} else if (selectedKey === 'help') {
			window['help-dialog'].show(event.detail.targetRef);
		}
	};

	const handleRtlSwitchChange = event => {
		document.body.dir = event.target.checked ? 'rtl' : 'ltr';
		applyDirection();
	};

	const handleContentDensitySwitchChange = event => {
		if (event.target.checked) {
			document.body.classList.add('ui5-content-density-compact');
		} else {
			document.body.classList.remove('ui5-content-density-compact');
		}
	};

	const handleSettingsDialogCloseButtonClick = event => {
		window['settings-dialog'].close();
	};

	const handleHelpDialogCloseButtonClick = event => {
		window['help-dialog'].close();
	};
</script>

<main class="app">
	<div class="tool-layout">
		<ui5-shellbar primary-title={shellBarTitle} show-notifications notifications-count="2" on:profile-click={handleProfileClick}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<ui5-button icon="menu" slot="startButton" on:click={() => (collapsed = !collapsed)} />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- <ui5-shellbar-item icon="menu" text="Menu" on:click={handleMenuToggle} /> -->
			<img class="app-header-logo" slot="logo" src={logo} alt="ui5 orange pheonix logo" />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<ui5-shellbar-item icon="palette" text="Theme" on:click={handleThemeSettingsToggle} />
			<ui5-avatar slot="profile" size="XS" initials={user.name.split(' ')[0][0] + user.name.split(' ')[1][0]} />
		</ui5-shellbar>

		<!-- *SIDE-NAVIGATION -->
		<ui5-side-navigation collapsed>
			{#each menu as m}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<ui5-side-navigation-item text={m.name} icon="home" on:click={e => push(m.route)} />
			{/each}
		</ui5-side-navigation>

		<div class="content"><Routes /></div>
	</div>
	<!-- * TAB-CONTAINER -->
	<!-- <ui5-tabcontainer on:tab-select={e => push(menu[e.detail.tabIndex].route)}>
		{#each menu as m}
			<ui5-tab text={m.name}> <Routes /></ui5-tab>
		{/each}
	</ui5-tabcontainer> -->

	<ui5-popover bind:this={themeSettingsPopover} class="app-bar-theming-popover" placement-type="Bottom" horizontal-align="Right" header-text="Theme">
		<ui5-list mode="SingleSelect" on:selection-change={handleThemeChange}>
			<ui5-li icon="palette" data-theme="sap_fiori_3_dark" selected>SAP Quartz Dark</ui5-li>
			<ui5-li icon="palette" data-theme="sap_fiori_3_hcb">SAP Quartz HCB</ui5-li>
			<ui5-li icon="palette" data-theme="sap_fiori_3_hcw">SAP Quartz HCW</ui5-li>
			<ui5-li icon="palette" data-theme="sap_horizon">SAP Horizon Morning</ui5-li>
			<ui5-li icon="palette" data-theme="sap_horizon_dark">SAP Horizon Evening</ui5-li>
			<ui5-li icon="palette" data-theme="sap_horizon_hcb">SAP Horizon HCB</ui5-li>
			<ui5-li icon="palette" data-theme="sap_horizon_hcw">SAP Horizon HCW</ui5-li>
			<ui5-li icon="palette" data-theme="sap_fiori_3">SAP Quartz Light</ui5-li>
		</ui5-list>
	</ui5-popover>

	<ui5-popover bind:this={menuPopover} class="app-bar-theming-popover" placement-type="Bottom" horizontal-align="Right" header-text="Menu">
		<ui5-list mode="SingleSelect" on:selection-change={handleMenuChange}>
			{#each menu as m}
				<ui5-li icon="activate" data-key={m.route}>{m.name}</ui5-li>
			{/each}
		</ui5-list>
	</ui5-popover>

	<ui5-popover bind:this={profileSettingsPopover} id="profile-pop" class="app-bar-profile-popover" placement-type="Bottom" horizontal-align="Right">
		<div class="profile-settings">
			<ui5-avatar size="M" initials={user.name.split(' ')[0][0] + user.name.split(' ')[1][0]} />
			<div class="profile-text">
				<ui5-title level="H3">{user.name}</ui5-title>
				<ui5-label>{user.role}</ui5-label>
			</div>
		</div>

		<div class="profile-settings-list">
			<ui5-list mode="SingleSelect" separators="None" on:item-click={handleProfileSettingsSelect} bind:this={profileSettingsPopover}>
				<ui5-li icon="settings" data-key="settings">Settings</ui5-li>
				<ui5-li icon="sys-help" data-key="help">Help</ui5-li>
				<ui5-li icon="log" data-key="sign-out">Sign out</ui5-li>
			</ui5-list>
		</div>
	</ui5-popover>

	<ui5-dialog id="settings-dialog" header-text="Profile Settings" draggable>
		<div>
			<div class="profile-rtl-switch centered">
				<div class="profile-rtl-switch-title">
					<ui5-label class="profile-rtl-switch-text">RTL</ui5-label>
				</div>
				<ui5-switch on:change={handleRtlSwitchChange} />
			</div>
		</div>

		<div class="profile-rtl-switch centered">
			<div class="profile-rtl-switch-title">
				<ui5-label class="profile-rtl-switch-text">Compact</ui5-label>
			</div>
			<ui5-switch on:change={handleContentDensitySwitchChange} />
		</div>

		<div class="dialog-button">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<ui5-button on:click={handleSettingsDialogCloseButtonClick} design="Emphasized">Close</ui5-button>
		</div>
	</ui5-dialog>

	<ui5-dialog id="help-dialog">
		<div slot="header" class="help-header" id="header-title-align">
			<ui5-icon name="sys-help" />
			Help
		</div>

		<div class="help-header" id="header-logo-align">
			<img class="app-header-logo" alt="logo" slot="logo" src={logo} />
			<ui5-title level="H5">UI5 Web Components Svelte Sample App</ui5-title>
		</div>

		<p class="help-dialog-text">
			<b>Release</b>: b225.20220729335 <br />
			<b>Server</b>: pk21443x3132 <br />
			<b>Timestamp</b>: 2022-08-18T10:29:03.159+0200 <br />
			<b>Company ID</b>: SAP <br />
			<b>UI version</b>: SAP Fiori <br />
			<b>Edition</b>: Enterprise <br />
			<b>Admin version</b>: Svelte Admin <br />
		</p>
		<hr />
		<span class="help-dialog-text">For more information, please visit our <a href="https://github.com/SAP-samples/ui5-webcomponents-sample-svelte" target="_blank">documentation</a>.</span>
		<p />
		<div class="dialog-button">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<ui5-button design="Emphasized" on:click={handleHelpDialogCloseButtonClick}>Close</ui5-button>
		</div>
	</ui5-dialog>
</main>

<style scoped>
	:global(html) {
		padding: 0;
		margin: 0;
		height: 100%;
		background-color: var(--sapBackgroundColor);
	}

	:global(body) {
		padding: 0;
		margin: 0;
		height: 100%;
		background-color: var(--sapBackgroundColor);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	*:not(:defined) {
		display: none;
	}

	.app {
		width: 100%;
	}

	.app-header-logo {
		height: 2rem;
		max-height: 2rem;
	}

	.app-bar-theming-popover {
		width: 250px;
	}
	.app-bar-profile-popover {
		width: 250px;
	}

	#settings-dialog {
		max-width: 300px;
	}

	.dialog-button {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.625rem;
		margin-bottom: -0.425rem;
	}

	.profile-settings,
	.help-header {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.profile-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-inline-start: 1rem;
	}

	.app-header-logo {
		height: 2rem;
	}

	.profile-settings-list {
		margin-top: 1.25rem;
	}

	.help-dialog-text {
		font-size: 0.875rem;
	}

	.profile-rtl-switch {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#header-title-align {
		margin: 1rem 0;
		gap: 0.225rem;
	}

	#header-logo-align {
		margin: 0.225rem 3.225rem 0.225rem 0;
		align-items: center;
		gap: 0.435rem;
	}

	#help-dialog::part(header) {
		justify-content: flex-start;
	}

	ui5-shellbar::part(root) {
		padding-inline-start: 0.75rem;
		padding-inline-end: 1.25rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent), 0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);
	}
	.tool-layout {
		padding: 0.5rem 0.5rem 0 0.5rem;
		background: color-mix(in srgb, black 4%, var(--sapBackgroundColor));
		display: grid;
		gap: 0.5rem;
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
	}
	.tool-layout > * {
		z-index: 1;
	}
	ui5-shellbar {
		grid-column: 1 / span 2;
		grid-row: 1 / 2;
	}
	ui5-side-navigation {
		border-radius: 0.5rem 0.5rem 0 0.5rem;
	}
	.content {
		background: var(--sapBackgroundColor);
		border-radius: 0.5rem 0.5rem 0 0;
		box-shadow: 0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent), 0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);
	}
</style>
