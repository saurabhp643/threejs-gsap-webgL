// // src/components/TextGalaxy.jsx
// import React, { useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import { gsap } from "gsap";

// const TextGalaxy = () => {
//   useEffect(() => {
//     // Canvas
//     const canvas = document.querySelector("canvas.webgl");

//     // Scene
//     const scene = new THREE.Scene();

//     // Sizes
//     const sizes = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };

//     // Camera
//     const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
//     camera.position.z = 5;
//     scene.add(camera);

//     // Controls
//     const controls = new OrbitControls(camera, canvas);
//     controls.enableDamping = true;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//       alpha: true, // Allow transparency
//     });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     // Load font and create text
//     const fontLoader = new FontLoader();
//     fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
//       const lines = [
//         "Bittensor is a decentralized protocol that utilizes machine learning",
//         "to create a more efficient and fair network. It allows users to",
//         "stake their tokens, participate in governance, and earn rewards.",
//         "",
//         "By leveraging advanced technologies, Bittensor empowers users to",
//         "engage in a collaborative ecosystem, fostering innovation and",
//         "creating opportunities for everyone involved.",
//       ];

//       const characterMeshes = []; // Array to hold the character meshes

//       const material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.8 });

//       // Create a mesh for each line of text
//       lines.forEach((line, lineIndex) => {
//         const characters = line.split(""); // Split the line into characters
//         const lineMesh = new THREE.Group(); // Group to hold line meshes

//         // Create a character mesh for each character
//         characters.forEach((char, charIndex) => {
//           const textGeometry = new TextGeometry(char, {
//             font: font,
//             size: 0.2,
//             height: 0.1,
//             curveSegments: 12,
//           });

//           const mesh = new THREE.Mesh(textGeometry, material);
//           mesh.position.set(charIndex * 0.25 - (characters.length * 0.25) / 2, 0, 0); // Position the characters in a line
//           lineMesh.add(mesh);
//           characterMeshes.push(mesh); // Add each character mesh to the character array
//         });

//         lineMesh.position.y = -lineIndex * 0.5; // Space lines vertically
//         scene.add(lineMesh);
//       });

//       // Animation function using GSAP
//       // const animateText = () => {
//       //   const radius = 3; // Base radius for the vortex
//       //   const speedFactor = 0.5; // Adjust speed

//       //   characterMeshes.forEach((mesh, index) => {
//       //     // Use GSAP to create a vortex animation
//       //     gsap.to(mesh.position, {
//       //       x: radius * Math.cos(index * 0.3),
//       //       y: Math.sin(Date.now() * 0.001 + index) * 0.5, // Up and down movement
//       //       z: radius * Math.sin(index * 0.3),
//       //       rotationY: "+=2",
//       //       duration: 2,
//       //       repeat: -1,
//       //       ease: "power1.inOut",
//       //       stagger: {
//       //         amount: 0.5, // Stagger the animation for each character
//       //         from: "start",
//       //       },
//       //     });
//       //   });
//       // };
//       // Inside the fontLoader.load callback after characterMeshes are created

//       const animateText = () => {
//         const speedFactor = 0.05; // Adjust speed for spiral motion
      
//         characterMeshes.forEach((mesh, index) => {
//           // Calculate the angle based on the index and time
//           const angle = Date.now() * speedFactor + index * 0.1; // Adjust angle for spiral effect
//           const radius = 2 + index * 0.1; // Increment radius for each character
//           const height = index * 0.2; // Increment height for vertical movement
      
//           // Use GSAP to animate the position in a vertical spiral
//           gsap.to(mesh.position, {
//             x: radius * Math.cos(angle), // Calculate x position for spiral
//             y: height + Math.sin(angle) * 0.5, // Vertical height with some oscillation
//             z: radius * Math.sin(angle), // Calculate z position for spiral
//             rotationY: "+=2", // Rotate around Y-axis for dynamic effect
//             duration: 2, // Duration of the animation
//             ease: "power1.inOut", // Easing function
//             onComplete: () => animateText(), // Call animateText again for continuous effect
//           });
//         });
//       };
      
      
      
      

// // Call the animateText function to start the animation


//       animateText();

//       // Animate loop
//       const clock = new THREE.Clock();
//       const animate = () => {
//         controls.update();
//         renderer.render(scene, camera);
//         window.requestAnimationFrame(animate);
//       };

//       animate();
//     });

//     // Handle window resize
//     window.addEventListener("resize", () => {
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;

//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(sizes.width, sizes.height);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     });

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener("resize", () => {});
//       controls.dispose();
//     };
//   }, []);

//   return <canvas className="webgl" />;
// };

// export default TextGalaxy;


// import React, { useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import { gsap } from "gsap";

// const TextGalaxy = () => {
//   useEffect(() => {
//     // Canvas
//     const canvas = document.querySelector("canvas.webgl");

//     // Scene
//     const scene = new THREE.Scene();

//     // Sizes
//     const sizes = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };

//     // Camera
//     const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
//     camera.position.y = 11;
//     scene.add(camera);

//     // Controls
//     const controls = new OrbitControls(camera, canvas);
//     controls.enableDamping = true;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//     });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     // Load font and create text
//     const fontLoader = new FontLoader();
//     fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
//       const text = `
//         Bittensor is a decentralized protocol that utilizes machine learning
//         to create a more efficient and fair network. It allows users to
//         stake their tokens, participate in governance, and earn rewards.

//         By leveraging advanced technologies, Bittensor empowers users to
//         engage in a collaborative ecosystem, fostering innovation and
//         creating opportunities for everyone involved.
//          Bittensor is a decentralized protocol that utilizes machine learning
//         to create a more efficient and fair network. It allows users to
//         stake their tokens, participate in governance, and earn rewards.

        
//       `;

//       const lines = text.split("\n");
//       const characterMeshes = []; // Array to hold the character meshes

//       const material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.8 });

//       // Create a mesh for each line of text
//       lines.forEach((line, lineIndex) => {
//         const lineMesh = new THREE.Group(); // Group to hold line meshes

//         const characters = line.split(""); // Split the line into characters

//         // Create a character mesh for each character
//         characters.forEach((char, charIndex) => {
//           const textGeometry = new TextGeometry(char, {
//             font: font,
//             size: 0.1, // Smaller font size for galaxy effect
//             height: 0.05,
//             curveSegments: 12,
//           });

//           const mesh = new THREE.Mesh(textGeometry, material);
//           mesh.position.set(charIndex * 0.15 - (characters.length * 0.15) / 2, 0, 0); // Position the characters in a line
//           lineMesh.add(mesh);
//         });

//         lineMesh.position.y = -lineIndex * 0.25; // Space lines vertically
//         scene.add(lineMesh);
//         characterMeshes.push(lineMesh);
//       });

//       // Animate loop
//       const clock = new THREE.Clock();
//       const animateText = () => {
//         const elapsedTime = clock.getElapsedTime();

//         characterMeshes.forEach((lineMesh, lineIndex) => {
//           lineMesh.children.forEach((mesh, charIndex) => {
//             const radius = 1.5; // Base radius for the spiral
//             const angle = elapsedTime + charIndex * 0.1; // Increment angle based on time and character index

//             // Calculate positions for spiral effect
//             mesh.position.x = radius * Math.cos(angle) * (1 + charIndex * 0.05); // Spiral outward
//             mesh.position.y = charIndex * 0.1 + Math.sin(angle * 2) * 0.5; // Vertical movement with oscillation
//             mesh.position.z = radius * Math.sin(angle) * (1 + charIndex * 0.05); // Spiral outward
//             mesh.rotation.y += 0.02; // Rotate around Y-axis
//           });
//         });

//         controls.update();
//         renderer.render(scene, camera);
//         window.requestAnimationFrame(animateText);
//       };

//       animateText();
//     });

//     // Handle window resize
//     window.addEventListener("resize", () => {
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;

//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(sizes.width, sizes.height);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     });

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener("resize", () => {});
//       controls.dispose();
//     };
//   }, []);

//   return <canvas className="webgl" />;
// };

// export default TextGalaxy;










// src/components/TextGalaxy.jsx
import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { gsap } from "gsap";

const TextGalaxy = () => {
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 12; // Adjusted camera position for a larger view
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true, 
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 10));

    // Load font and create text
    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
      const text = `
        Bittensor is a decentralized protocol that utilizes machine learning
        to create a more efficient and fair network. It allows users to
        stake their tokens, participate in governance, and earn rewards.

        By leveraging advanced technologies, Bittensor empowers users to
        engage in a collaborative ecosystem, fostering innovation and
        creating opportunities for everyone involved.
         Bittensor is a decentralized protocol that utilizes machine learning
        to create a more efficient and fair network. It allows users to
        stake their tokens, participate in governance, and earn rewards.

        By leveraging advanced technologies, Bittensor empowers users to
        engage in a collaborative ecosystem, fostering innovation and
        creating opportunities for everyone involved.
         Bittensor is a decentralized protocol that utilizes machine learning
        to create a more efficient and fair network. It allows users to
        stake their tokens, participate in governance, and earn rewards.

        
      `;

      const words = text.split(" "); // Split text into words
      const lineMeshes = []; 

      const material = new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.8 });

      // Create a mesh for each word of text
      words.forEach((word, index) => {
        const textGeometry = new TextGeometry(word, {
          font: font,
          size: 0.3,
          height: 0.1,
          curveSegments: 12,
        });

        const mesh = new THREE.Mesh(textGeometry, material);
        mesh.position.x = Math.random() * 20 - 10; // Increased range for wider galaxy
        mesh.position.y = Math.random() * 20 - 10; 
        mesh.position.z = Math.random() * 20 - 10; 
        scene.add(mesh);
        lineMeshes.push(mesh);
      });

      // Create black hole effect
      const blackHoleGeometry = new THREE.SphereGeometry(1, 32, 32);
      const blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
      scene.add(blackHole);

      // Animate words towards the black hole
      const animateWords = () => {
        lineMeshes.forEach((mesh) => {
          const randomX = Math.random() * 0.5 - 0.25; // Reduced movement for more subtle effect
          const randomY = Math.random() * 0.5 - 0.25; 
          const randomZ = Math.random() * 0.5 - 0.25; 

          gsap.to(mesh.position, {
            x: `+=${randomX * 10}`, // Move towards the center
            y: `+=${randomY * 10}`, 
            z: `+=${randomZ * 10}`, 
            duration: 5 + Math.random() * 5, // Random duration for varied speed
            repeat: -1, // Repeat animation indefinitely
            ease: "power1.inOut", 
          });

          gsap.to(mesh.scale, {
            x: 0, // Scale down to create a shrinking effect
            y: 0,
            z: 0,
            duration: 5 + Math.random() * 5,
            repeat: -1,
            ease: "power1.inOut",
          });
        });
      };

      animateWords();

      // Animate loop
      const animate = () => {
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      };

      animate();
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", () => {});
      controls.dispose();
    };
  }, []);

  return <canvas className="webgl" />;
};

export default TextGalaxy;
