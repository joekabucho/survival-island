#pragma strict

var campfirePrefab : Transform;
var player : GameObject;

private var canBuild : boolean = true;

function Start()
{
	renderer.material.color = Color.green;
	renderer.material.color.a = 0.5;
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "Terrain" || col.gameObject.tag == "Tree")
	{
		renderer.material.color = Color.red;
		renderer.material.color.a = 0.5;
		canBuild = false;
	}
}

function OnTriggerExit (col : Collider)
{
	if(col.gameObject.tag == "Terrain" || col.gameObject.tag == "Tree")
	{
		renderer.material.color = Color.green;
		renderer.material.color.a = 0.5;
		canBuild = true;
	}
}

function Update()
{
	if(Input.GetKeyDown("b") && canBuild == true)
	{
		Instantiate(campfirePrefab, player.transform.position + Vector3(0, 0, 5), Quaternion.identity);
		player.GetComponent(Crafting).campFire.SetActive(false);
	}
}




