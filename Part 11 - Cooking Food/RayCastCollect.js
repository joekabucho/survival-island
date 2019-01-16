#pragma strict

var rayLength : int = 10;

private var inventory : Inventory;

private var guiShow : boolean = false;
private var guiFish : boolean = false;

var bush : GameObject;
var player : GameObject;

function Start()
{
	inventory = GameObject.Find("First Person Controller").GetComponent(Inventory);
}

function Update()
{
	var hit : RaycastHit;
	var fwd = transform.TransformDirection(Vector3.forward);
	
	if(Physics.Raycast(transform.position, fwd, hit, rayLength))
	{
		if(hit.collider.gameObject.tag == "Wood")
		{
			guiShow = true;
			
			if(Input.GetKeyDown("e"))
			{
				inventory.wood++;
				Destroy(hit.collider.gameObject);
				guiShow = false;
			}
		}
		
		if(hit.collider.gameObject.tag == "Coconut")
		{
			guiShow = true;
			
			if(Input.GetKeyDown("e"))
			{
				inventory.wood++;
				Destroy(hit.collider.gameObject);
				guiShow = false;
			}
		}
		
		if(hit.collider.gameObject.tag == "Fish")
		{
			guiShow = true;
			
			if(Input.GetKeyDown("e"))
			{
				inventory.fish++;
				Destroy(hit.collider.gameObject);
				guiShow = false;
			}
		}
		
		if(hit.collider.gameObject.tag == "BushFull")
		{
			guiShow = true;
			bush = (hit.collider.gameObject);
			
			if(Input.GetKeyDown("e"))
			{
				bush.GetComponent(BushController).berriesTaken = true;
				guiShow = false;
				player.GetComponent(Inventory).cookedFish += 1;
			}
		}
		
		if(hit.collider.gameObject.tag == "CampFire")
		{
			guiFish = true;
			
			if(Input.GetKeyDown("e") && player.GetComponent(Inventory).fish >= 1)
			{
				player.GetComponent(Inventory).cookedFish++;
				player.GetComponent(Inventory).fish--;
			}
			
			else
			{
				//NOT ENOUGH FISH
				Debug.Log("Not enough fish");
			}
		}
	}			
	
	else
	{
		guiShow = false;
		guiFish = false;
	}
}

function OnGUI()
{
	if(guiShow == true)
	{
		GUI.Box(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 100, 20), "PICKUP!");
	}
	
	if(guiFish == true)
	{
		GUI.Box(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 100, 20), "Cook Fish!");
	}
	
}






















