import HooksData from "./HooksData";

const HookForCapsulePage = () => HooksData("/capsules", []);
const HookForCapsuleDetails = (id) => HooksData("/capsules/" + id, [id]);
const HookForCompanyPage = () => HooksData("/company", []);
const HookForCoresPage = () => HooksData("/cores", []);
const HookForCoresDetails = (id) => HooksData("/cores/" + id, [id]);
const HookForCrewPage = () => HooksData("/crew", []);
const HookForCrewDetails = (id) => HooksData("/crew/" + id, [id]);
const HookForDragonsPage = () => HooksData("/dragons", []);
const HookForDragonsDetails = (id) => HooksData("/dragons/" + id, [id]);
const HookForLandpadsPage = () => HooksData("/landpads", []);
const HookForLandpadsDetails = (id) => HooksData("/landpads/" + id, [id]);
const HookForLaunchesPage = () => HooksData("/launches", []);
const HookForLaunchesDetails = (id) => HooksData("/launches/" + id, [id]);
const HookForLaunchpadsPage = () => HooksData("/launchpads", []);
const HookForLaunchpadsDetails = (id) => HooksData("/launchpads/" + id, [id]);
const HookForPayloadsPage = () => HooksData("/payloads", []);
const HookForPayloadsDetails = (id) => HooksData("/payloads/" + id, [id]);
const HookForRoadsterPage = () => HooksData("/roadster", []);
const HookForRoadsterDetails = (id) => HooksData("/roadster/" + id, [id]);
const HookForRocketsPage = () => HooksData("/rockets", []);
const HookForRocketsDetails = (id) => HooksData("/rockets/" + id, [id]);
const HookForShipsPage = () => HooksData("/ships", []);
const HookForShipsDetails = (id) => HooksData("/ships/" + id, [id]);
const HookForStarLinkPage = () => HooksData("/starlink", []);
const HookForStarLinkDetails = (id) => HooksData("/starlink/" + id, [id]);


export {HookForCapsulePage,HookForCapsuleDetails,HookForCompanyPage,HookForCoresPage,HookForCoresDetails,HookForCrewPage,HookForCrewDetails,HookForDragonsPage,HookForDragonsDetails,HookForLandpadsPage,HookForLandpadsDetails,HookForLaunchesPage,HookForLaunchesDetails,HookForLaunchpadsPage,HookForLaunchpadsDetails,HookForPayloadsPage,HookForPayloadsDetails,HookForRoadsterPage,HookForRoadsterDetails,HookForRocketsPage,HookForRocketsDetails,HookForShipsPage,HookForShipsDetails,HookForStarLinkPage,HookForStarLinkDetails};
