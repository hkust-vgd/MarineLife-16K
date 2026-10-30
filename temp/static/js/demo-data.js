// Project-page demo questions, editorially revised for consistency.
// Original imported wording is preserved in index-original.html and Git HEAD.
// These webpage revisions do not replace benchmark ground truth or model scores.
window.MARINE_DEMO_VIDEOS = [
  {
    "id": "BigIsland_Jan3_2023__0019",
    "filename": "BigIsland_Jan3_2023_0019.mp4",
    "attributes": [
      {
        "label": "Central object",
        "value": "Fish"
      },
      {
        "label": "Color",
        "value": "Dark green body, yellow tail, black fins"
      },
      {
        "label": "Size and shape",
        "value": "Adult fish with a streamlined, oval body"
      },
      {
        "label": "Secondary objects",
        "value": "Coral reef; white sandy bottom"
      },
      {
        "label": "Environment",
        "value": "Clear blue seawater"
      },
      {
        "label": "Video quality",
        "value": "Clear video quality"
      },
      {
        "label": "Motion",
        "value": "Slow movement"
      },
      {
        "label": "Camera position",
        "value": "Wide shot of tropical fish and the coral reef"
      },
      {
        "label": "Camera angle",
        "value": "Static angle on tropical fish and the coral reef"
      }
    ],
    "qa": [
      {
        "question": "What is the central object in the video?",
        "options": [
          {
            "label": "A",
            "text": "fish"
          },
          {
            "label": "B",
            "text": "shark"
          },
          {
            "label": "C",
            "text": "seal"
          },
          {
            "label": "D",
            "text": "sea turtle"
          }
        ],
        "answer": "A — fish"
      },
      {
        "question": "Which appearance description best matches the fish?",
        "options": [
          {
            "label": "A",
            "text": "dark green body, yellow tail and black fins; streamlined, oval body"
          },
          {
            "label": "B",
            "text": "color: many vivid colors, mainly moss green, light green, and yellow; size/shape: various sizes"
          },
          {
            "label": "C",
            "text": "color: rough body, black and pink; size/shape: various sizes"
          },
          {
            "label": "D",
            "text": "color: white scales with thin black on the body; orange-yellow dorsal and anal fins with black edges; white pectoral and pelvic fins; size/shape: large size"
          }
        ],
        "answer": "A — dark green body, yellow tail and black fins; streamlined, oval body"
      },
      {
        "question": "Which option lists only objects present in the video? An option is incorrect if it includes any object not shown.",
        "options": [
          {
            "label": "A",
            "text": "hard coral, fish, lobster"
          },
          {
            "label": "B",
            "text": "shark, many different small fish species and isolated hard corals growing separately, rocky area"
          },
          {
            "label": "C",
            "text": "sandy seafloor, coral reef and a resting sea lion"
          },
          {
            "label": "D",
            "text": "fish, coral reef, white sandy bottom"
          }
        ],
        "answer": "D — fish, coral reef, white sandy bottom"
      },
      {
        "question": "Which camera position or camera movement best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "camera position/view: the camera is stationary, taking a wide shot of the sea turtle from near to far, then from far to near, and moving across the camera; camera angle/movement: horizontal angle that follows the sea turtle"
          },
          {
            "label": "B",
            "text": "camera position/view: the camera takes a wide shot of Tropical fish and the coral reef; camera angle/movement: static angle on Tropical fish and the coral reef"
          },
          {
            "label": "C",
            "text": "camera position/view: the camera pans around; camera angle/movement: wide horizontal shot"
          },
          {
            "label": "D",
            "text": "camera position/view: the camera tilts down toward the seafloor; camera angle/movement: vertical tilt"
          }
        ],
        "answer": "B — camera position/view: the camera takes a wide shot of Tropical fish and the coral reef; camera angle/movement: static angle on Tropical fish and the coral reef"
      },
      {
        "question": "Which movement or state of the fish best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "the spiny coral moves slightly"
          },
          {
            "label": "B",
            "text": "slow movement"
          },
          {
            "label": "C",
            "text": "the coral reef moves very little"
          },
          {
            "label": "D",
            "text": "the shark cruises steadily through open water"
          }
        ],
        "answer": "B — slow movement"
      },
      {
        "question": "How is the environment in the video?",
        "options": [
          {
            "label": "A",
            "text": "slightly turbid seawater"
          },
          {
            "label": "B",
            "text": "dense kelp forest"
          },
          {
            "label": "C",
            "text": "murky green water"
          },
          {
            "label": "D",
            "text": "clear blue seawater"
          }
        ],
        "answer": "D — clear blue seawater"
      },
      {
        "question": "How do the camera movement and viewpoint capture the fish and the visible object activity in the video?",
        "options": [],
        "answer": "A wide, static view keeps the fish and coral reef in the frame while the fish moves slowly; the reference describes no camera pan or tilt."
      },
      {
        "question": "Write one complete video-captioning sentence of fewer than 80 words describing the main subject, its visible appearance, nearby objects, environment and lighting, video quality, subject activity, camera framing and viewing angle, and camera movement when established; avoid inferring measurements or details that are not visible.",
        "options": [],
        "answer": "An adult reef fish with a smooth-looking, streamlined oval body, dark green coloration, yellow tail and black fins swims slowly above coral and white sand in clear blue water under filtered natural daylight; the footage is clear, with a wide camera position and a static view of the fish and reef."
      }
    ]
  },
  {
    "id": "GreenIsland_Apr9_2023__0002",
    "filename": "GreenIsland_Apr9_2023_0002.mp4",
    "attributes": [
      {
        "label": "Central object",
        "value": "Sea turtle"
      },
      {
        "label": "Texture and pattern",
        "value": "Brownish-black with white spots; white with black dots"
      },
      {
        "label": "Color",
        "value": "Brown"
      },
      {
        "label": "Size and shape",
        "value": "Adult size"
      },
      {
        "label": "Secondary objects",
        "value": "Coral reefs and surrounding rocks; diver"
      },
      {
        "label": "Environment",
        "value": "Clear blue seawater"
      },
      {
        "label": "Video quality",
        "value": "Clear video quality"
      },
      {
        "label": "Motion",
        "value": "The sea turtle swims at a slow speed"
      },
      {
        "label": "Camera position",
        "value": "Stationary wide shot as the sea turtle moves from near to far and back"
      },
      {
        "label": "Camera angle",
        "value": "Horizontal angle following the sea turtle"
      }
    ],
    "qa": [
      {
        "question": "What is the central object in the video?",
        "options": [
          {
            "label": "A",
            "text": "seal"
          },
          {
            "label": "B",
            "text": "shark"
          },
          {
            "label": "C",
            "text": "ray"
          },
          {
            "label": "D",
            "text": "sea turtle"
          }
        ],
        "answer": "D — sea turtle"
      },
      {
        "question": "Which color and size or shape description best matches the sea turtle?",
        "options": [
          {
            "label": "A",
            "text": "color: red, white, and brown; size/shape: fan-shaped fins with a compact body"
          },
          {
            "label": "B",
            "text": "color: rough body, black and pink; size/shape: various sizes"
          },
          {
            "label": "C",
            "text": "color: brown; size/shape: adult sizes"
          },
          {
            "label": "D",
            "text": "color: orange, brown; size/shape: large"
          }
        ],
        "answer": "C — color: brown; size/shape: adult sizes"
      },
      {
        "question": "Which option lists only objects present in the video? An option is incorrect if it includes any object not shown.",
        "options": [
          {
            "label": "A",
            "text": "many schools of small fish, seal, rocky area"
          },
          {
            "label": "B",
            "text": "coral reefs and rocks surrounding the organism, diver, sea turtle"
          },
          {
            "label": "C",
            "text": "diver, many different small fish species and isolated hard corals growing separately, seaweed"
          },
          {
            "label": "D",
            "text": "diver, sea turtle, hard coral"
          }
        ],
        "answer": "B — coral reefs and rocks surrounding the organism, diver, sea turtle"
      },
      {
        "question": "Which camera position or camera movement best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "camera position/view: the camera takes a close-up of the coral reef, then part of a school of small fish and a rope, then a wide shot around the coral reef; the video is clear; camera angle/movement: the shot moves slowly, taking us from a close-up view to a wide view of the coral reef"
          },
          {
            "label": "B",
            "text": "camera position/view: the camera takes a close-up of hard coral from one spot to another; camera angle/movement: close-up shot around the hard coral"
          },
          {
            "label": "C",
            "text": "camera position/view: the camera tilts down toward the seafloor; camera angle/movement: vertical tilt"
          },
          {
            "label": "D",
            "text": "camera position/view: the camera is stationary, taking a wide shot of the sea turtle from near to far, then from far to near, and moving across the camera; camera angle/movement: horizontal angle that follows the sea turtle"
          }
        ],
        "answer": "D — camera position/view: the camera is stationary, taking a wide shot of the sea turtle from near to far, then from far to near, and moving across the camera; camera angle/movement: horizontal angle that follows the sea turtle"
      },
      {
        "question": "Which movement or state of the sea turtle, best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "black and pink sea urchins move very little"
          },
          {
            "label": "B",
            "text": "the sea turtle swims at a slow speed"
          },
          {
            "label": "C",
            "text": "the diver swims slowly and exhales air bubbles"
          },
          {
            "label": "D",
            "text": "the seal swims fast"
          }
        ],
        "answer": "B — the sea turtle swims at a slow speed"
      },
      {
        "question": "How is the environment in the video?",
        "options": [
          {
            "label": "A",
            "text": "turquoise, turbid water"
          },
          {
            "label": "B",
            "text": "slightly turbid seawater"
          },
          {
            "label": "C",
            "text": "clear blue seawater"
          },
          {
            "label": "D",
            "text": "dark rocky seabed"
          }
        ],
        "answer": "C — clear blue seawater"
      },
      {
        "question": "How do the camera movement and viewpoint capture the sea turtle and the visible object activity in the video?",
        "options": [],
        "answer": "The camera is stationary, taking a wide shot of the sea turtle from near to far, then from far to near, and moving across the camera. The camera angle or movement is described as follows: horizontal angle that follows the sea turtle. Together, these camera choices record the sea turtle and the visible activity: the sea turtle swims at a slow speed."
      },
      {
        "question": "Write one complete English video-captioning sentence that contains fewer than 80 words, describes the central object's identity, texture or pattern, color, size, and shape, includes up to three secondary objects, details the environment and lighting, mentions the video quality, describes the object motion, and defines the camera position and camera angle separately.",
        "options": [],
        "answer": "The video shows an adult sea turtle with an olive-brown oval scute-patterned shell, speckled pale head, and broad flippers swimming over coral mounds, rocky ledges, distant fish, and clear sunlit blue reef water; the turtle glides slowly, with a following side camera position and horizontal camera angle."
      }
    ]
  },
  {
    "id": "KAUST_Jun2023__0021",
    "filename": "KAUST_Jun2023_0021.mp4",
    "attributes": [
      {
        "label": "Central object",
        "value": "Coral reef"
      },
      {
        "label": "Color",
        "value": "Varied coloration"
      },
      {
        "label": "Size and shape",
        "value": "Large"
      },
      {
        "label": "Secondary objects",
        "value": "Two divers"
      },
      {
        "label": "Environment",
        "value": "Clear water"
      },
      {
        "label": "Video quality",
        "value": "High-quality, sharp footage"
      },
      {
        "label": "Motion",
        "value": "Two divers observe the coral reef"
      },
      {
        "label": "Camera position",
        "value": "Wide view of the coral reef and two nearby divers"
      },
      {
        "label": "Camera angle",
        "value": "Horizontal view with a pan around the coral reef"
      }
    ],
    "qa": [
      {
        "question": "What is the central object in the video?",
        "options": [
          {
            "label": "A",
            "text": "rocky arch"
          },
          {
            "label": "B",
            "text": "shipwreck"
          },
          {
            "label": "C",
            "text": "coral reef"
          },
          {
            "label": "D",
            "text": "kelp forest"
          }
        ],
        "answer": "C — coral reef"
      },
      {
        "question": "Which appearance description best matches the coral reef?",
        "options": [
          {
            "label": "A",
            "text": "color: golden yellow; size/shape: tall and branching"
          },
          {
            "label": "B",
            "text": "color: bright scarlet; size/shape: needle-thin and elongated"
          },
          {
            "label": "C",
            "text": "color: varied coloration; size/shape: large"
          },
          {
            "label": "D",
            "text": "color: translucent white; size/shape: round and gelatinous"
          }
        ],
        "answer": "C — color: varied coloration; size/shape: large"
      },
      {
        "question": "Which option lists only objects present in the video? An option is incorrect if it includes any object not shown.",
        "options": [
          {
            "label": "A",
            "text": "coral reef, two divers"
          },
          {
            "label": "B",
            "text": "giant clam, manta ray"
          },
          {
            "label": "C",
            "text": "giant Pacific octopus, hammerhead shark"
          },
          {
            "label": "D",
            "text": "leafy seadragon, chambered nautilus"
          }
        ],
        "answer": "A — coral reef, two divers"
      },
      {
        "question": "Which camera position or camera movement best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "camera framing: wide view of the coral reef and two divers; viewing angle: horizontal; movement: pan around the reef"
          },
          {
            "label": "B",
            "text": "camera position/view: diver-eye close view; camera angle/movement: upward-tilted handheld shot"
          },
          {
            "label": "C",
            "text": "camera position/view: fixed macro view; camera angle/movement: top-down static shot"
          },
          {
            "label": "D",
            "text": "camera position/view: overhead orbiting view; camera angle/movement: vertical circular sweep"
          }
        ],
        "answer": "A — camera framing: wide view of the coral reef and two divers; viewing angle: horizontal; movement: pan around the reef"
      },
      {
        "question": "How do the camera movement and viewpoint capture the coral reef and the visible object activity in the video?",
        "options": [],
        "answer": "The camera pans around the reef in a wide, horizontal view, showing its surroundings and the two divers observing it; the divers' activity is distinct from the camera movement."
      },
      {
        "question": "Write one complete video-captioning sentence of fewer than 80 words describing the main subject, its visible appearance, nearby objects, environment and lighting, video quality, subject activity, camera framing and viewing angle, and camera movement when established; avoid inferring measurements or details that are not visible.",
        "options": [],
        "answer": "A large coral reef with varied colors and rough, knobbly, branching surfaces is shown beside two observing divers in clear water under natural daylight, with bright areas and shaded crevices; sharp footage presents the reef from a wide camera position at a horizontal angle as the camera pans around it."
      },
      {
        "question": "How is the environment in the video?",
        "options": [
          {
            "label": "A",
            "text": "clear water"
          },
          {
            "label": "B",
            "text": "opaque, sediment-filled water with very low visibility"
          },
          {
            "label": "C",
            "text": "a deep blackwater pelagic zone"
          },
          {
            "label": "D",
            "text": "a silt-heavy estuary"
          }
        ],
        "answer": "A — clear water"
      }
    ]
  },
  {
    "id": "GreenIsland_Guanqun__0015",
    "filename": "GreenIsland_Guanqun_0015.mp4",
    "attributes": [
      {
        "label": "Central object",
        "value": "School of fish"
      },
      {
        "label": "Color",
        "value": "Silver"
      },
      {
        "label": "Size and shape",
        "value": "School of fish; individual body size not specified"
      },
      {
        "label": "Secondary objects",
        "value": "Coral reef; diver filming video"
      },
      {
        "label": "Environment",
        "value": "Clear water"
      },
      {
        "label": "Lighting",
        "value": "Light filtering down through the water"
      },
      {
        "label": "Video quality",
        "value": "Sharp footage"
      },
      {
        "label": "Motion",
        "value": "School of fish moves slowly"
      },
      {
        "label": "Camera position",
        "value": "Camera view centered on school of fish"
      },
      {
        "label": "Camera angle",
        "value": "Horizontal, wide-angle shot of school of fish"
      }
    ],
    "qa": [
      {
        "question": "What is the central object in the video?",
        "options": [
          {
            "label": "A",
            "text": "scorpionfish"
          },
          {
            "label": "B",
            "text": "wobbegong shark"
          },
          {
            "label": "C",
            "text": "giant manta ray"
          },
          {
            "label": "D",
            "text": "school of fish"
          }
        ],
        "answer": "D — school of fish"
      },
      {
        "question": "Which appearance description best matches the school of fish?",
        "options": [
          {
            "label": "A",
            "text": "silver fish grouped in a school; individual body size not specified"
          },
          {
            "label": "B",
            "text": "color: cobalt blue; size/shape: compact and box-shaped"
          },
          {
            "label": "C",
            "text": "color: golden yellow; size/shape: tall and branching"
          },
          {
            "label": "D",
            "text": "color: bright scarlet; size/shape: needle-thin and elongated"
          }
        ],
        "answer": "A — silver fish grouped in a school; individual body size not specified"
      },
      {
        "question": "Which option lists only objects present in the video? An option is incorrect if it includes any object not shown.",
        "options": [
          {
            "label": "A",
            "text": "leafy seadragon, chambered nautilus"
          },
          {
            "label": "B",
            "text": "giant clam, manta ray"
          },
          {
            "label": "C",
            "text": "school of fish, coral reef, diver filming video"
          },
          {
            "label": "D",
            "text": "giant Pacific octopus, hammerhead shark"
          }
        ],
        "answer": "C — school of fish, coral reef, diver filming video"
      },
      {
        "question": "Which camera position or camera movement best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "camera position/view: diver-eye close view; camera angle/movement: upward-tilted handheld shot"
          },
          {
            "label": "B",
            "text": "camera position/view: fixed macro view; camera angle/movement: top-down static shot"
          },
          {
            "label": "C",
            "text": "camera position/view: overhead orbiting view; camera angle/movement: vertical circular sweep"
          },
          {
            "label": "D",
            "text": "camera framing: wide view centered on the school of fish; viewing angle: horizontal"
          }
        ],
        "answer": "D — camera framing: wide view centered on the school of fish; viewing angle: horizontal"
      },
      {
        "question": "How does the camera framing and viewing angle show the school of fish and its activity?",
        "options": [],
        "answer": "A wide, horizontal view keeps the school of fish centered and shows it moving slowly near the coral reef and a filming diver; the reference does not establish whether the camera itself pans or translates."
      },
      {
        "question": "Write one complete video-captioning sentence of fewer than 80 words describing the main subject, its visible appearance, nearby objects, environment and lighting, video quality, subject activity, camera framing and viewing angle, and camera movement when established; avoid inferring measurements or details that are not visible.",
        "options": [],
        "answer": "A school of silver fish with smooth-looking, reflective bodies moves slowly near a coral reef and a filming diver in clear water, with daylight filtering through the water; sharp footage shows the school centered in a wide camera view at a horizontal angle."
      },
      {
        "question": "Which movement or state of the school of fish best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "The school of fish remains completely motionless."
          },
          {
            "label": "B",
            "text": "The school of fish darts rapidly across the frame."
          },
          {
            "label": "C",
            "text": "The school of fish burrows beneath the sediment."
          },
          {
            "label": "D",
            "text": "The school of fish moves slowly."
          }
        ],
        "answer": "D — The school of fish moves slowly."
      },
      {
        "question": "How is the environment in the video?",
        "options": [
          {
            "label": "A",
            "text": "clear water"
          },
          {
            "label": "B",
            "text": "a deep blackwater pelagic zone"
          },
          {
            "label": "C",
            "text": "a silt-heavy estuary"
          },
          {
            "label": "D",
            "text": "opaque water with dense suspended sediment"
          }
        ],
        "answer": "A — clear water"
      },
      {
        "question": "How is the lighting in the video?",
        "options": [
          {
            "label": "A",
            "text": "Light filtering down through the water"
          },
          {
            "label": "B",
            "text": "a narrow artificial spotlight illuminating the subjects against otherwise dark water"
          },
          {
            "label": "C",
            "text": "A focused artificial torch beam"
          },
          {
            "label": "D",
            "text": "Dim ambient twilight"
          }
        ],
        "answer": "A — Light filtering down through the water"
      }
    ]
  },
  {
    "id": "WestPalmBeach_May2023__0003",
    "filename": "WestPalmBeach_May2023_0003.mp4",
    "attributes": [
      {
        "label": "Central object",
        "value": "Shark"
      },
      {
        "label": "Color",
        "value": "Grey"
      },
      {
        "label": "Size and shape",
        "value": "Medium"
      },
      {
        "label": "Secondary objects",
        "value": "Fish; diver"
      },
      {
        "label": "Environment",
        "value": "Blue water"
      },
      {
        "label": "Lighting",
        "value": "Natural sunlight reaches the scene"
      },
      {
        "label": "Video quality",
        "value": "Good quality; fairly clear"
      },
      {
        "label": "Motion",
        "value": "The shark swims fairly fast, and a diver swims nearby"
      },
      {
        "label": "Camera position",
        "value": "Wide view of the shark, nearby fish and a diver"
      },
      {
        "label": "Camera angle",
        "value": "Horizontal view with a pan around the scene"
      }
    ],
    "qa": [
      {
        "question": "What is the central object in the video?",
        "options": [
          {
            "label": "A",
            "text": "shark"
          },
          {
            "label": "B",
            "text": "ray"
          },
          {
            "label": "C",
            "text": "sea turtle"
          },
          {
            "label": "D",
            "text": "seal"
          }
        ],
        "answer": "A — shark"
      },
      {
        "question": "Which appearance description best matches the shark?",
        "options": [
          {
            "label": "A",
            "text": "color: dark gray above and pale below; size/shape: broad wing-like body"
          },
          {
            "label": "B",
            "text": "color: dark green body, yellow tail, black fins; size/shape: adult sizes"
          },
          {
            "label": "C",
            "text": "color: grey; size/shape: medium"
          },
          {
            "label": "D",
            "text": "color: black wetsuit with bright pink fins; size/shape: adult sizes"
          }
        ],
        "answer": "C — color: grey; size/shape: medium"
      },
      {
        "question": "Which option lists only objects present in the video? An option is incorrect if it includes any object not shown.",
        "options": [
          {
            "label": "A",
            "text": "diver, shark, fish around"
          },
          {
            "label": "B",
            "text": "algae, seaweed, sea urchins, starfish"
          },
          {
            "label": "C",
            "text": "hard coral, fish, school of fish, surrounded by sand"
          },
          {
            "label": "D",
            "text": "shark, small fish, diver and a sea turtle"
          }
        ],
        "answer": "A — diver, shark, fish around"
      },
      {
        "question": "Which camera position or camera movement best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "camera position/view: the camera moves above the subject; camera angle/movement: downward overhead angle"
          },
          {
            "label": "B",
            "text": "camera framing: wide view of the shark and nearby subjects; viewing angle: horizontal; movement: pan around the scene"
          },
          {
            "label": "C",
            "text": "camera framing: fixed close-up of the seafloor; viewing angle: vertically downward; movement: none"
          },
          {
            "label": "D",
            "text": "camera position/view: the camera tilts down toward the seafloor; camera angle/movement: vertical tilt"
          }
        ],
        "answer": "B — camera framing: wide view of the shark and nearby subjects; viewing angle: horizontal; movement: pan around the scene"
      },
      {
        "question": "Which movement or state of the shark best matches the video?",
        "options": [
          {
            "label": "A",
            "text": "the turtle swims slowly with steady flipper movement"
          },
          {
            "label": "B",
            "text": "the diver swims at normal speed"
          },
          {
            "label": "C",
            "text": "the shark swims fairly fast"
          },
          {
            "label": "D",
            "text": "butterfly fish swim slowly"
          }
        ],
        "answer": "C — the shark swims fairly fast"
      },
      {
        "question": "Which description best matches the water's visible color?",
        "options": [
          {
            "label": "A",
            "text": "reddish-brown water"
          },
          {
            "label": "B",
            "text": "green water"
          },
          {
            "label": "C",
            "text": "milky white water"
          },
          {
            "label": "D",
            "text": "blue water"
          }
        ],
        "answer": "D — blue water"
      },
      {
        "question": "What is the lighting condition in the video?",
        "options": [
          {
            "label": "A",
            "text": "a narrow artificial spotlight against otherwise dark water"
          },
          {
            "label": "B",
            "text": "no visible illumination; the subjects appear only as silhouettes"
          },
          {
            "label": "C",
            "text": "natural sunlight reaches the scene"
          },
          {
            "label": "D",
            "text": "a predominantly red artificial light"
          }
        ],
        "answer": "C — natural sunlight reaches the scene"
      },
      {
        "question": "How do the camera movement and viewpoint capture the shark and the visible object activity in the video?",
        "options": [],
        "answer": "The camera pans across the scene in a wide, horizontal view, showing the shark swimming fairly fast together with nearby fish and a swimming diver."
      },
      {
        "question": "Write one complete video-captioning sentence of fewer than 80 words describing the main subject, its visible appearance, nearby objects, environment and lighting, video quality, subject activity, camera framing and viewing angle, and camera movement when established; avoid inferring measurements or details that are not visible.",
        "options": [],
        "answer": "A medium-sized grey shark with a smooth-looking, elongated body swims fairly fast near small fish and a diver in blue water reached by natural sunlight; the footage is fairly clear, with a wide camera position and a horizontal viewing angle as the camera pans across the scene."
      }
    ]
  }
];
