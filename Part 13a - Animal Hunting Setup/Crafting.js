﻿#pragma strict

var MenuSkin : GUISkin;

//References
var player : GameObject;
var mainCamera : GameObject;
var arms : GameObject;

//Icons
var campfireIcon : Texture;
var tentIcon : Texture;
var spareIcon : Texture;
var spareIcon2 : Texture;
var spareIcon3 : Texture;

//Player prefabs
var campFire : GameObject;
var tent : GameObject;
var trap : GameObject;
var spare2 : GameObject;
var spare3 : GameObject;


private var showGUI : boolean = false;

private var invScript : Inventory;

function Start()
{
	invScript = GetComponent(Inventory);
}

function Update()
{
	if(Input.GetKeyDown("c"))
	{
		showGUI = !showGUI;
	}
	
	if(showGUI == true)
	{
		Time.timeScale = 0;
		player.GetComponent(FPSInputController).enabled = false;
		player.GetComponent(MouseLook).enabled = false;
		mainCamera.GetComponent(MouseLook).enabled = false;
		arms.GetComponent(PlayerControl).enabled = false;
	}
	
	if(showGUI == false)
	{
		Time.timeScale = 1;
		player.GetComponent(FPSInputController).enabled = true;
		player.GetComponent(MouseLook).enabled = true;
		mainCamera.GetComponent(MouseLook).enabled = true;
		arms.GetComponent(PlayerControl).enabled = true;

	}
}
 
function OnGUI() 
{
	if(showGUI == true)
	{
		GUI.skin = MenuSkin;
    		GUI.BeginGroup(new Rect(Screen.width/2-150,Screen.height/2-150,300,300));
        		GUI.Box(Rect(0 , 0, 300, 300),"Crafting System");

        		if(GUI.Button(Rect(10, 50, 50, 50), GUIContent (campfireIcon, "Build a campfire")))
        		{
        			if(invScript.wood >= 6 && invScript.stone >= 3)
        			{
        				campFire.SetActive(true);
        				invScript.wood -= 6;
        				invScript.stone -= 3;
        			}
        		}
        		
        		if(GUI.Button(Rect(10, 120, 50, 50), GUIContent	(tentIcon, "Build a tent?")))
        		{
        			if(invScript.wood >= 10 && invScript.stone >= 5 && invScript.clay >= 3)
        			{
        				tent.SetActive(true);
        				invScript.wood -= 10;
        				invScript.stone -= 5;
        			}
        		}
        		
        		
        		//TRAP SECTION
        		if(GUI.Button(Rect(10, 190, 50, 50), GUIContent(spareIcon, "Build a trap?")))
        		{
        			if(invScript.wood >= 10 && invScript.stone >= 5)
        			{
        				trap.SetActive(true);
        				invScript.wood -= 10;
        				invScript.stone -= 5;
        			}
        		}
        		
        		//SECOND COLUMN!
        		if(GUI.Button(Rect(100, 50, 50, 50), GUIContent(spareIcon2, "Spare item tooltip!")))
        		{
        			if(invScript.wood >= 10 && invScript.stone >= 5)
        			{
        				spare2.SetActive(true);
        				invScript.wood -= 10;
        				invScript.stone -= 5;
        			}
        		}
        		
        		if(GUI.Button(Rect(100, 120, 50, 50), GUIContent(spareIcon3, "Spare item tooltip!")))
        		{
        			if(invScript.wood >= 10 && invScript.stone >= 5)
        			{
        				spare3.SetActive(true);
        				invScript.wood -= 10;
        				invScript.stone -= 5;
        			}
        		}
        		
        		GUI.Label (Rect (100, 250, 100, 40), GUI.tooltip);
            	GUI.EndGroup ();
      }
}
















