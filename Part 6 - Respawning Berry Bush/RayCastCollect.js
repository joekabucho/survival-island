#pragma strict

var rayLength : int = 10;

private var inventory : Inventory;

private var guiShow : boolean = false;

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
	}			
	
	else
	{
		guiShow = false;
	}
}

function OnGUI()
{
	if(guiShow == true)
	{
		GUI.Box(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 100, 20), "PICKUP!");
	}
}






















