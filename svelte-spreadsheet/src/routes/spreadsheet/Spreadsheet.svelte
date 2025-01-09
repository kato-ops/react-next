<script lang="ts">
	import { onMount } from 'svelte';
	import Cell from './Cell.svelte';

	let cellContents: (number | string)[][] = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];

	const persist = (): void => {
		fetch('/api/cells', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ cells: cellContents })
		});
	};

	onMount(() => {
		fetch('/api/cells').then((res) =>
			res.text().then((s) => {
				const data = JSON.parse(s);
				if (data.cells) {
					cellContents = data.cells;
				}
			})
		);
	});
</script>

<table>
	<thead>
		<tr>
			<th></th>
			{#each cellContents[0] as _, i}
				<th>{String.fromCharCode(65 + i)}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each cellContents as row, i}
			<tr>
				<th>{i + 1}</th>
				{#each row as cell, j}
					<Cell content={cell} onChange={(updated) => (cellContents[i][j] = updated)} />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
<button on:click={() => (cellContents = [...cellContents, Array(cellContents[0].length).fill(0)])}>
	+ row
</button>
<button on:click={() => (cellContents = cellContents.slice(0, -1))}> - row </button>
<br />
<button on:click={() => (cellContents = cellContents.map((row) => [...row, 0]))}>+ column</button>
<button on:click={() => (cellContents = cellContents.map((row) => row.slice(0, -1)))}
	>- column</button
>
<br />
<button
	on:click={(): void => {
		console.log(cellContents);
	}}
>
	Inspect
</button>
<br />
<button on:click={persist}>Save</button>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th {
		color: #505050;
		font-weight: normal;
		border: 1px solid #999;
		background: white;
		padding: 0;
		margin: 0;
	}
</style>
