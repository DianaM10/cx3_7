require_relative( 'models/wizard' )
require_relative( 'models/magicalitems' )
require_relative( 'models/ownedmagicalitems' )
require( 'pry-byebug' )




wizard1 = Wizard.new({ 'name' => 'Diana' })
wizard1.save()
wizard2 = Wizard.new( { 'name' => 'Claudia'} )
wizard2.save()
wizard3 = Wizard.new( { 'name' => 'David'})
wizard3.save()


magical_item1 = MagicalItem.new( { 'name' => 'Poofish'})
magical_item1.save
magical_item2 = MagicalItem.new( { 'name' => 'Crystal Ball'})
magical_item2.save()
magical_item3 = MagicalItem.new( { 'name' => 'Broom'})
magical_item3.save()

owned_magical_item1 = OwnedMagicalItem.new({ 'wizard_id' => wizard1.id , 'magical_item_id' => magical_item1.id })
owned_magical_item1.save
owned_magical_item2 = OwnedMagicalItem.new({ 'wizard_id' => wizard1.id , 'magical_item_id' => magical_item3.id })
owned_magical_item2.save
owned_magical_item3 = OwnedMagicalItem.new({ 'wizard_id' => wizard2.id , 'magical_item_id' => magical_item2.id })
owned_magical_item3.save
owned_magical_item4 = OwnedMagicalItem.new({ 'wizard_id' => wizard3.id , 'magical_item_id' => magical_item3.id })
owned_magical_item4.save
owned_magical_item5 = OwnedMagicalItem.new({ 'wizard_id' => wizard3.id , 'magical_item_id' => magical_item1.id })
owned_magical_item5.save




binding.pry
nil