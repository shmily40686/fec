const db  = require('./index.js');
const Comments = require('./youTube.js');

const sampleComments = [
  {
		"_id": 1,
		"videoId": 1,
		"message": "My border collie is the cutest",
		"createdAt": "Tue Nov 07 2017 12:00:00 GMT-0800 (PDT)",
		"upVotes": 53,
		"downVotes":2,
		"parentComment": null,
		"displayName": "Chris Shepherd",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvSKXun-V3N_2PBVjpepYUwEG0xBuyn3yrD5ugsSbrxvbheOgiQ"
	},
	{
		"_id": 2,
		"videoId": 1,
		"message": "I have a border collie and she is the best",
		"createdAt": "Mon Nov 13 2017 10:56:00 GMT-0800 (PDT)",
		"upVotes": 46,
		"downVotes": 7,
		"parentComment": null,
		"displayName": "Mark Reese",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWMTmTbGpx08oDKsIBQmX6smsPm_VGqwXopj2HYBjCyA2kLSg"
	},
	{
		"_id": 3,
		"videoId": 1,
		"message": "My Sleepy is the best dog ever",
		"createdAt": "Mon Nov 13 2017 23:14:00 GMT-0800 (PDT)",
		"upVotes": 72,
		"downVotes": 1,
		"parentComment": null,
		"displayName": "Wolf Rang",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2IL2Ts001yblo_BX7MCUsySPLtKL0r0uElj4o6OqZvPKF7CY"
	},
	{
		"_id": 4,
		"videoId": 1,
		"message": "My border collie loves tennis balls too much",
		"createdAt": "Thu Feb 01 2018 19:00:00 GMT-0800 (PDT)",
		"upVotes": 0,
		"downVotes": 64,
		"parentComment": null,
		"displayName": "plx MaG",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2vKhzHFyMryiH9vJWSCRql5ZTBYDEO1Ay6dU_ZDuItc09IGE"
	},
	{
		"_id": 5,
		"videoId": 1,
		"message": "Border collies are so adorable",
		"createdAt": "Fri May 25 2018 19:00:00 GMT-0700 (PDT)",
		"upVotes": 24,
		"downVotes": 12,
		"parentComment": null,
		"displayName": "furyfox13",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPd1h-RppJVnjHdUEKSRa62zU9ajC6VEr0NVWzUfWqGDfV8fH"
	},
	{
		"_id": 6,
		"videoId": 1,
		"message": "These dogs are the best!",
		"createdAt": "Sun Jun 03 2018 19:00:00 GMT-0700 (PDT)",
		"upVotes": 5,
		"downVotes": 7,
		"parentComment": null,
		"displayName": "furyfox13",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Cp2T20Rt7KnvKE_JJOtfzUair02Olj87sJ2eDO3Aj_UxvqUX4Q"
	},
	{
		"_id": 7,
		"videoId": 1,
		"message": "When I see my dog I feel happy",
		"createdAt": "Fri Jun 15 2018 19:00:00 GMT-0700 (PDT)",
		"upVotes": 88,
		"downVotes": 1,
		"parentComment": null,
		"displayName": "Live Unedited gaming",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAuQBeHCMtoxwpiMTxDd-URm0q0XzCeeAyGHoSlmaqaHQBLdx"
	},
	{
		"_id": 8,
		"videoId": 1,
		"message": "My border collie licks my feet too much",
		"createdAt": "Fri Jun 29 2018 12:00:00 GMT-0700 (PDT)",
		"upVotes": 31,
		"downVotes": 80,
		"parentComment": null,
		"displayName": "furyfox13",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5TU78T-X7fdoizsoxhj15vbDNZEeQ2Z18DM58Y9g1e1PMGXA-g"
	},
	{
		"_id": 9,
		"videoId": 1,
		"message": "My border collie used to chew my furniture, but not anymore",
		"createdAt": "Fri Jul 06 2018 19:00:00 GMT-0700 (PDT)",
		"upVotes": 75,
		"downVotes": 19,
		"parentComment": null,
		"displayName": "SuperAlfaDogg",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctN415tCLe-rME5yP1oYMsUF1Jn8rJPNJYPRyquRwGLtMNI3a"
	},
	{
		"_id": 10,
		"videoId": 1,
		"message": "My border collie farts like a human...",
		"createdAt": "Fri Jul 06 2018 19:32:00 GMT-0700 (PDT)",
		"upVotes": 74,
		"downVotes": 92,
		"parentComment": null,
		"displayName": "Larry Foster",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6QzIEYnQBXRY6z4YctVK_p3lcpDGQdsJRl7564TIH0s18UXn"
	},
	{
		"_id": 11,
		"videoId": 1,
		"message": "My border collie learned how to roll over",
		"createdAt": "Fri Jul 06 2018 21:00:00 GMT-0700 (PDT)",
		"upVotes": 71,
		"downVotes": 145,
		"parentComment": null,
		"displayName": "Kate Annals",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAdSePp46kDkkEgTmtcTyXDtoBo1R8_AU9j4wdGyTEow6b5XH"
	},
	{
		"_id": 12,
		"videoId": 1,
		"message": "border collies are the smartest dogs",
		"createdAt": "Fri Jul 06 2018 22:00:00 GMT-0700 (PDT)",
		"upVotes": 52,
		"downVotes": 64,
		"parentComment": null,
		"displayName": "Joe Kelly",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIZh327XyzXga1s_Oi0GrY783VL5AA0VS5dzANRI_sBDh1yJp"
	},
	{
		"_id": 13,
		"videoId": 1,
		"message": "border collies need to have clean hair or they look very messy",
		"createdAt": "Fri Jul 06 2018 22:07:00 GMT-0700 (PDT)",
		"upVotes": 17,
		"downVotes": 28,
		"parentComment": null,
		"displayName": "Flea",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMD-KD7uDM1__OeN3CPCWWA-wx8TQtuILHNHb2mTRBDcrNRdS7g"
	},
	{
		"_id": 14,
		"videoId": 1,
		"message": "my wife and I got a border collie, she is so cute",
		"createdAt": "Fri Jul 06 2018 23:00:00 GMT-0700 (PDT)",
		"upVotes": 14,
		"downVotes": 26,
		"parentComment": null,
		"displayName": "Suzette Smith",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8OwJESnXtinrXMRAlwizpM2lqL5gf49ngIpfp512udw8Hf2yCQ"
	},
	{
		"_id": 15,
		"videoId": 1,
		"message": "our border collie is our baby",
		"createdAt": "Fri Jul 06 2018 23:05:00 GMT-0700 (PDT)",
		"upVotes": 96,
		"downVotes": 478,
		"parentComment": null,
		"displayName": "Dave Boerema",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXLggAXRXhDbaWvFBrbxyIPUyegif6V3ZXuBCFi0uS8WXO2RG"
	},
	{
		"_id": 16,
		"videoId": 1,
		"message": "my dog got sprayed by a skunk",
		"createdAt": "Fri Jul 06 2018 23:42:00 GMT-0700 (PDT)",
		"upVotes": 27,
		"downVotes": 143,
		"parentComment": null,
		"displayName": "Tamas Johancsik",
		"profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHmXD5ebLrqQKfDKHDPBqjFz9WF5bmGhL8FRPik5o5Yvfs41i"
	}
];

const insertSampleComments = function() {

     Comments.remove({})
	  .then(Comments.create(sampleComments))
	  .then(db.disconnect());
};

insertSampleComments();