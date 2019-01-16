#pragma strict

var timer : float = 30.0;
var countDown : boolean = true;

var player : GameObject;
var caughtModel : GameObject;
var brokenModel : GameObject;

var choices : int[] = [1, 2];
var result : int;
var hasChosen : boolean = false;
var hasCaught : boolean = false;

function Start()
{
	player = GameObject.Find("First Person Controller");
}
 
function Update()
{
	if(countDown)
	{
 		timer -= Time.deltaTime;
 	}
 	
 	if(timer <= 0 && !hasChosen)
 	{
 		ChooseNumber();
 		countDown = false;
 	}
 	
 	if(result == 1 && !hasCaught)
 	{
		CaughtAnimal();
 	}
 	
 	else if(result == 2 && !hasCaught)
 	{
		DestroyTrap();
 	}
}
 
function CaughtAnimal()
{
	this.gameObject.GetComponent(MeshRenderer).enabled = false;
	caughtModel.SetActive(true);
	this.GetComponent(BoxCollider).isTrigger = true;
	hasCaught = true;
}

function DestroyTrap()
{
	this.gameObject.GetComponent(MeshRenderer).enabled = false;
	brokenModel.SetActive(true);
	hasCaught = true;
}

function OnTriggerEnter(Col : Collider)
{
	if(Col.CompareTag("Player"))
	{
		player.GetComponent(Inventory).fish += 10;
		this.GetComponent(BoxCollider).isTrigger = false;
		this.gameObject.SetActive(false);
	}
}

function ChooseNumber()
{
	var howManyThings : int = choices.length;
 	
	var myRandomIndex : int;
	myRandomIndex = Random.Range(0, howManyThings);
 	
	result = choices[myRandomIndex];
	hasChosen = true;
}
 
 
