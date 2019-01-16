#pragma strict

var trapPrefab : Transform;
var player : GameObject;

private var canBuild : boolean = false;

function Start()
{
	renderer.material.color = Color.red;
	renderer.material.color.a = 0.5;
	player = GameObject.Find("First Person Controller");
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "AnimalTrack")
	{
		renderer.material.color = Color.green;
		renderer.material.color.a = 0.5;
		canBuild = true;
	}
}

function OnTriggerExit(col : Collider)
{
	if(col.gameObject.tag == "AnimalTrack")
	{
		renderer.material.color = Color.red;
		renderer.material.color.a = 0.5;
		canBuild = false;
	}
}

function Update()
{
	if(Input.GetKeyDown("b") && canBuild == true)
	{
		Instantiate(trapPrefab, player.transform.position + Vector3(0, 0, 5), Quaternion.identity);
		player.GetComponent(Crafting).trap.SetActive(false);
	}
}


















