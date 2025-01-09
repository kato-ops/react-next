<script lang="ts">
	export let content: string | number = '';
	export let onChange = (updatedContent: string | number): void => {};

	let editing = false;

	const onClick = (): void => {
		editing = !editing;
	};
	const onKeyDown = (event: KeyboardEvent): void => {
		if (['Enter', 'Escape'].includes(event.key)) {
			editing = false;
			if (event.key === 'Enter') {
				const target = event.target as HTMLInputElement;
				content = target.value;
				onChange(content);
			}
		}
	};

	const evaluateFormula = (exp: string) => {
		const sanitized = exp.slice(1).replace(/[^\=\+\-\*%/0-9]/g, '');
		return eval(sanitized);
	};
</script>

<td on:click={onClick}>
	{#if editing}
		<input value={content} on:click|stopPropagation={() => null} on:keydown={onKeyDown} />
	{:else if content.toString().startsWith('=')}
		{evaluateFormula(content.toString())}
	{:else}
		{content}
	{/if}
</td>

<style>
	td {
		color: #505050;
		font-weight: normal;
		border: 1px solid #999;
		background: white;
		padding: 0;
		margin: 0;
	}
</style>
