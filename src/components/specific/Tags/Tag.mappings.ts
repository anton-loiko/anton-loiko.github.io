import { WorkbenchTagsEnum } from '$lib/types';
import GodotIcon from '$components/icons/tags/Godot.svelte';
import ReactIcon from '$components/icons/tags/React.svelte';
import UnrealIcon from '$components/icons/tags/Unreal.svelte';
import BriefcaseIcon from '$components/icons/tags/Briefcase.svelte';
import RocketIcon from '$components/icons/tags/Rocket.svelte';

export const COLOR_MAP = new Map<WorkbenchTagsEnum, string>([
	[WorkbenchTagsEnum.WEB, 'text-tag-web'],
	[WorkbenchTagsEnum['2D_GAME'], 'text-tag-2d_game'],
	[WorkbenchTagsEnum['3D_GAME'], 'text-tag-3d_game'],
	[WorkbenchTagsEnum['INDEPENDENT'], 'text-tag-independent'],
	[WorkbenchTagsEnum['COMMERCIAL'], 'text-tag-commercial']
]);

export const ICON_MAP = new Map<WorkbenchTagsEnum, any>([
	[WorkbenchTagsEnum.WEB, ReactIcon],
	[WorkbenchTagsEnum['2D_GAME'], GodotIcon],
	[WorkbenchTagsEnum['3D_GAME'], UnrealIcon],
	[WorkbenchTagsEnum['INDEPENDENT'], RocketIcon],
	[WorkbenchTagsEnum['COMMERCIAL'], BriefcaseIcon]
]);
