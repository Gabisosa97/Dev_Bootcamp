<script lang="ts">
	import '@ui5/webcomponents/dist/Card';
	import '@ui5/webcomponents/dist/CardHeader.js';
	import '@ui5/webcomponents-icons/dist/group.js';
</script>

<div class="grid-container">
	<ui5-card>
		<ui5-card-header slot="header" title-text="David Williams" subtitle-text="Sales Manager"> undefined </ui5-card-header>
		<ui5-list separators="Inner">
			<ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
			<ui5-li icon="wallet" icon-end>Finance</ui5-li>
			<ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
		</ui5-list>
	</ui5-card>
	<ui5-card>
		<ui5-card-header slot="header" title-text="Project Cloud Transformation" subtitle-text="Revenue per Product | EUR" status="3 of 3"> undefined </ui5-card-header>
		<ui5-list separators="None">
			<ui5-li description="ID234522566-D44" additional-text="27.25K EUR" additional-text-state="Success">Avantel</ui5-li>
			<ui5-li description="ID7125852785-A51" additional-text="22.89K EUR" additional-text-state="Warning">Telecomunicaciones Star</ui5-li>
			<ui5-li description="ID123555587-I05" additional-text="7.85K EUR" additional-text-state="Error">Talpa</ui5-li>
		</ui5-list>
	</ui5-card>
	<ui5-card>
		<ui5-card-header slot="header" title-text="Donna Maria Moore" subtitle-text="Senior Sales Executive">
			<img src="../assets/images/avatars/man_avatar_1.png" slot="avatar" />
			undefined
		</ui5-card-header>
		<style>
			.content,
			.content-group {
				display: flex;
				flex-direction: column;
				padding-block-end: 1rem;
			}
			.content-padding {
				padding: 0.5rem 1rem 0 1rem;
				box-sizing: border-box;
			}
		</style>
		<div class="content content-padding">
			<ui5-title level="H5" style="padding-block-end: 1rem;">Contact details</ui5-title>
			<div class="content-group">
				<ui5-label>Company Name</ui5-label>
				<ui5-title level="H6">Company A</ui5-title>
			</div>
			<div class="content-group">
				<ui5-label>Address</ui5-label>
				<ui5-title level="H6">481 West Street, Anytown 45066, USA</ui5-title>
			</div>
			<div class="content-group">
				<ui5-label>Website</ui5-label>
				<ui5-link target="_blank">www.company_a.example.com</ui5-link>
			</div>
		</div>
	</ui5-card>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 22rem);
		grid-auto-rows: 1fr;
		gap: 1rem;
	}
</style>
