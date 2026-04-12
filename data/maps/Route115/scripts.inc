Route115_MapScripts::
	map_script MAP_SCRIPT_ON_LOAD, Route115_OnLoad
	map_script MAP_SCRIPT_ON_TRANSITION, Route115_OnTransition
	map_script MAP_SCRIPT_ON_FRAME_TABLE, Route115_OnFrame
	.byte 0

Route115_OnLoad:
	call_if_eq VAR_ABNORMAL_WEATHER_LOCATION, ABNORMAL_WEATHER_ROUTE_115_WEST, AbnormalWeather_EventScript_PlaceTilesRoute115West
	call_if_eq VAR_ABNORMAL_WEATHER_LOCATION, ABNORMAL_WEATHER_ROUTE_115_EAST, AbnormalWeather_EventScript_PlaceTilesRoute115East
	end

Route115_OnTransition:
	call_if_eq VAR_SHOULD_END_ABNORMAL_WEATHER, 1, AbnormalWeather_EventScript_HideMapNamePopup
	call_if_eq VAR_ABNORMAL_WEATHER_LOCATION, ABNORMAL_WEATHER_ROUTE_115_WEST, AbnormalWeather_StartGroudonWeather
	call_if_eq VAR_ABNORMAL_WEATHER_LOCATION, ABNORMAL_WEATHER_ROUTE_115_EAST, AbnormalWeather_StartGroudonWeather
	end

Route115_OnFrame:
	map_script_2 VAR_SHOULD_END_ABNORMAL_WEATHER, 1, AbnormalWeather_EventScript_EndEventAndCleanup_1
	.2byte 0

Route115_EventScript_Woman::
	lock
	faceplayer
	goto_if_set FLAG_RECEIVED_STONE_ROUTE_115, Route115_EventScript_WomanAfterGift
	msgbox Route115_Text_WomanStoneIntro, MSGBOX_DEFAULT
	multichoice 0, 0, MULTI_STONE_CHOICE, TRUE
	switch VAR_RESULT
	case 0, Route115_EventScript_GiveFireStone
	case 1, Route115_EventScript_GiveThunderStone
	case 2, Route115_EventScript_GiveWaterStone
	case 3, Route115_EventScript_WomanCancel
	case MULTI_B_PRESSED, Route115_EventScript_WomanCancel
	end

Route115_EventScript_GiveFireStone::
	msgbox Route115_Text_WomanFireChoice, MSGBOX_DEFAULT
	giveitem ITEM_FIRE_STONE
	goto_if_eq VAR_RESULT, FALSE, Common_EventScript_ShowBagIsFull
	setflag FLAG_RECEIVED_STONE_ROUTE_115
	msgbox Route115_Text_WomanEnjoy, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_GiveThunderStone::
	msgbox Route115_Text_WomanElectricChoice, MSGBOX_DEFAULT
	giveitem ITEM_THUNDER_STONE
	goto_if_eq VAR_RESULT, FALSE, Common_EventScript_ShowBagIsFull
	setflag FLAG_RECEIVED_STONE_ROUTE_115
	msgbox Route115_Text_WomanEnjoy, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_GiveWaterStone::
	msgbox Route115_Text_WomanWaterChoice, MSGBOX_DEFAULT
	giveitem ITEM_WATER_STONE
	goto_if_eq VAR_RESULT, FALSE, Common_EventScript_ShowBagIsFull
	setflag FLAG_RECEIVED_STONE_ROUTE_115
	msgbox Route115_Text_WomanEnjoy, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_WomanCancel::
	msgbox Route115_Text_WomanCancel, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_WomanAfterGift::
	msgbox Route115_Text_WomanAfterGift, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_RouteSignRustboro::
	msgbox Route115_Text_RouteSignRustboro, MSGBOX_SIGN
	end

Route115_EventScript_MeteorFallsSign::
	msgbox Route115_Text_MeteorFallsSign, MSGBOX_SIGN
	end

Route115_EventScript_Timothy::
	trainerbattle_single TRAINER_TIMOTHY_1, Route115_Text_TimothyIntro, Route115_Text_TimothyDefeat, Route115_EventScript_RegisterTimothy
	specialvar VAR_RESULT, ShouldTryRematchBattle
	goto_if_eq VAR_RESULT, TRUE, Route115_EventScript_RematchTimothy
	msgbox Route115_Text_TimothyPostBattle, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_RegisterTimothy::
	special PlayerFaceTrainerAfterBattle
	waitmovement 0
	msgbox Route115_Text_TimothyRegister, MSGBOX_DEFAULT
	register_matchcall TRAINER_TIMOTHY_1
	release
	end

Route115_EventScript_RematchTimothy::
	trainerbattle_rematch TRAINER_TIMOTHY_1, Route115_Text_TimothyRematchIntro, Route115_Text_TimothyRematchDefeat
	msgbox Route115_Text_TimothyPostRematch, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Koichi::
	trainerbattle_single TRAINER_KOICHI, Route115_Text_KoichiIntro, Route115_Text_KoichiDefeat
	msgbox Route115_Text_KoichiPostBattle, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Nob::
	trainerbattle_single TRAINER_NOB_1, Route115_Text_NobIntro, Route115_Text_NobDefeat, Route115_EventScript_RegisterNob
	specialvar VAR_RESULT, ShouldTryRematchBattle
	goto_if_eq VAR_RESULT, TRUE, Route115_EventScript_RematchNob
	msgbox Route115_Text_NobPostBattle, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_RegisterNob::
	special PlayerFaceTrainerAfterBattle
	waitmovement 0
	msgbox Route115_Text_NobRegister, MSGBOX_DEFAULT
	register_matchcall TRAINER_NOB_1
	release
	end

Route115_EventScript_RematchNob::
	trainerbattle_rematch TRAINER_NOB_1, Route115_Text_NobRematchIntro, Route115_Text_NobRematchDefeat
	msgbox Route115_Text_NobPostRematch, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Cyndy::
	trainerbattle_single TRAINER_CYNDY_1, Route115_Text_CyndyIntro, Route115_Text_CyndyDefeat, Route115_EventScript_RegisterCyndy
	specialvar VAR_RESULT, ShouldTryRematchBattle
	goto_if_eq VAR_RESULT, TRUE, Route115_EventScript_RematchCyndy
	msgbox Route115_Text_CyndyPostBattle, MSGBOX_DEFAULT
	release
	end

Route115_EventScript_RegisterCyndy::
	special PlayerFaceTrainerAfterBattle
	waitmovement 0
	msgbox Route115_Text_CyndyRegister, MSGBOX_DEFAULT
	register_matchcall TRAINER_CYNDY_1
	release
	end

Route115_EventScript_RematchCyndy::
	trainerbattle_rematch TRAINER_CYNDY_1, Route115_Text_CyndyRematchIntro, Route115_Text_CyndyRematchDefeat
	msgbox Route115_Text_CyndyPostRematch, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Hector::
	trainerbattle_single TRAINER_HECTOR, Route115_Text_HectorIntro, Route115_Text_HectorDefeat
	msgbox Route115_Text_HectorPostBattle, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Kyra::
	trainerbattle_single TRAINER_KYRA, Route115_Text_KyraIntro, Route115_Text_KyraDefeat
	msgbox Route115_Text_KyraPostBattle, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Jaiden::
	trainerbattle_single TRAINER_JAIDEN, Route115_Text_JaidenIntro, Route115_Text_JaidenDefeat
	msgbox Route115_Text_JaidenPostBattle, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Alix::
	trainerbattle_single TRAINER_ALIX, Route115_Text_AlixIntro, Route115_Text_AlixDefeat
	msgbox Route115_Text_AlixPostBattle, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Helene::
	trainerbattle_single TRAINER_HELENE, Route115_Text_HeleneIntro, Route115_Text_HeleneDefeat
	msgbox Route115_Text_HelenePostBattle, MSGBOX_AUTOCLOSE
	end

Route115_EventScript_Marlene::
	trainerbattle_single TRAINER_MARLENE, Route115_Text_MarleneIntro, Route115_Text_MarleneDefeat
	msgbox Route115_Text_MarlenePostBattle, MSGBOX_AUTOCLOSE
	end

Route115_Text_WomanStoneIntro:
	.string "Oh, hello there!\p"
	.string "I collect evolution stones as a hobby.\n"
	.string "I have a few extras I don't need.\p"
	.string "Tell me, which type do you prefer?\n"
	.string "FIRE, ELECTRIC, or WATER?$"

Route115_Text_WomanFireChoice:
	.string "Ah, fire! There's nothing like the\n"
	.string "warmth of a flame.$"

Route115_Text_WomanElectricChoice:
	.string "Electric! The crackling energy is\n"
	.string "thrilling, isn't it?$"

Route115_Text_WomanWaterChoice:
	.string "Water! So calm and powerful at\n"
	.string "the same time.$"

Route115_Text_WomanEnjoy:
	.string "I hope your POKéMON enjoys it!\n"
	.string "Use it wisely.$"

Route115_Text_WomanCancel:
	.string "No worries! Come talk to me again\n"
	.string "if you change your mind.$"

Route115_Text_WomanAfterGift:
	.string "Did your POKéMON enjoy the stone\n"
	.string "I gave you?$"

Route115_Text_RouteSignRustboro:
	.string "ROUTE 115\n"
	.string "{DOWN_ARROW} RUSTBORO CITY$"

Route115_Text_MeteorFallsSign:
	.string "METEOR FALLS\n"
	.string "FALLARBOR TOWN THROUGH HERE$"

