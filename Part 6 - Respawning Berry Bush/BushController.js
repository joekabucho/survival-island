#pragma strict

//tag 1 - BushFull
//tag 2 - BushEmpty

var berriesTaken : boolean = false;

var berries : GameObject;

var berryTimer : float = 5;

function Update()
{
	if(berriesTaken == true)
	{
		berries.active = false;
		berryTimer -= Time.deltaTime;
		this.gameObject.tag = "BushEmpty";
	}
	
	if(berryTimer <= 0)
	{
		berries.active = true;
		berriesTaken = false;
		this.gameObject.tag = "BushFull";
		berryTimer = 5;
	}
}