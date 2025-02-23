// priority: 0


console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.remove({id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
	event.remove({input: 'ad_astra:hammer'})

	event.remove({input: '#immersiveengineering:tools/hammers'})


	const ores_to_remove = ["aluminum", "lead", "nickel", "osmium", "platinum", "silver", "tin", "uranium", "zinc", "iridium", "ruby", "peridot", "sapphire"]
	const other_ores_to_remove = ["coal", "copper", "emerald", "iron", "quartz", "redstone", "diamond", "lapis", "platnium"]

	function remove_ore_recipe(name) { //(Recipe removals automatically mirrored to variants)
		event.remove({input: 'alltheores:' + name + '_ore'})
		event.remove({output: 'alltheores:' + name + '_ore'})
		event.remove({input: 'alltheores:raw_' + name})
		event.remove({output: 'alltheores:raw_' + name})
		event.remove({input: 'alltheores:raw_' + name + "_block"})
		event.remove({output: 'alltheores:raw_' + name + "_block"})
	}
	function remove_other_ore(name) {
		event.remove({input: 'alltheores:' + name + '_other_ore'})
		event.remove({output: 'alltheores:' + name + '_other_ore'})
	}

	ores_to_remove.forEach(remove_ore_recipe)
	other_ores_to_remove.forEach(remove_other_ore)

	event.remove({id: 'immersiveengineering:crafting/stick_aluminum'})
	event.remove({id: 'immersiveengineering:crafting/stick_steel'})
	event.remove({id: 'buildersaddition:iron_rod'})
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})