/**
 * Created by Jesse on 3/4/2020.
 */

({
    initializeBabylonJs : function(component, event, helper) {
        var canvas = component.find("canvas").getElement(); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () {
            // Create the scene space
            var scene = new BABYLON.Scene(engine);

            // Add a camera to the scene and attach it to the canvas
            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
            camera.attachControl(canvas, true);

            // Add lights to the scene
            var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
            var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

            // Add and manipulate meshes in the scene
            var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });
    },

    basicSceneBabylonJS : function(component, event, helper)  {
        var canvas = component.find("canvas").getElement(); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () {
            // Create the scene space
            var scene = new BABYLON.Scene(engine);

            // This creates and positions a free camera (non-mesh)
            var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

            // This targets the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());

            // This attaches the camera to the canvas
            camera.attachControl(canvas, true);

            // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

            // Default intensity is 1. Let's dim the light a small amount
            light.intensity = 0.7;

            // Our built-in 'sphere' shape.
            var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

            // Move the sphere upward 1/2 its height
            sphere.position.y = 1;

            // Our built-in 'ground' shape.
            var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });
    },

    actionSceneBabylonJS : function(component, event, helper)  {
        var canvas = component.find("canvas").getElement(); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () {
            // Create the scene space
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
            camera.setPosition(new BABYLON.Vector3(20, 200, 400));

            camera.lowerBetaLimit = 0.1;
            camera.upperBetaLimit = (Math.PI / 2) * 0.99;
            camera.lowerRadiusLimit = 150;

            scene.clearColor = new BABYLON.Color3(0, 0, 0);

            var light1 = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
            var light2 = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
            var light3 = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);

            light1.diffuse = BABYLON.Color3.Red();
            light2.diffuse = BABYLON.Color3.Green();
            light3.diffuse = BABYLON.Color3.Blue();

            // Define states
            light1.state = "on";
            light2.state = "on";
            light3.state = "on";

            // Ground
            var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene, false);
            var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
            groundMaterial.specularColor = BABYLON.Color3.Black();
            ground.material = groundMaterial;

            // Boxes
            var redBox = BABYLON.Mesh.CreateBox("red", 20, scene);
            var redMat = new BABYLON.StandardMaterial("ground", scene);
            redMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.emissiveColor = BABYLON.Color3.Red();
            redBox.material = redMat;
            redBox.position.x -= 100;

            var greenBox = BABYLON.Mesh.CreateBox("green", 20, scene);
            var greenMat = new BABYLON.StandardMaterial("ground", scene);
            greenMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            greenMat.emissiveColor = BABYLON.Color3.Green();
            greenBox.material = greenMat;
            greenBox.position.z -= 100;

            var blueBox = BABYLON.Mesh.CreateBox("blue", 20, scene);
            var blueMat = new BABYLON.StandardMaterial("ground", scene);
            blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            blueMat.emissiveColor = BABYLON.Color3.Blue();
            blueBox.material = blueMat;
            blueBox.position.x += 100;

            // Sphere
            var sphere = BABYLON.Mesh.CreateSphere("sphere", 16, 20, scene);
            var sphereMat = new BABYLON.StandardMaterial("ground", scene);
            sphereMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            sphereMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            sphereMat.emissiveColor = BABYLON.Color3.Purple();
            sphere.material = sphereMat;
            sphere.position.z += 100;

            // Rotating donut
            var donut = BABYLON.Mesh.CreateTorus("donut", 20, 8, 16, scene);

            // On pick interpolations
            var prepareButton = function (mesh, color, light) {
                var goToColorAction = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light, "diffuse", color, 1000, null, true);

                mesh.actionManager = new BABYLON.ActionManager(scene);
                mesh.actionManager.registerAction(
                    new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light, "diffuse", BABYLON.Color3.Black(), 1000))
                    .then(new BABYLON.CombineAction(BABYLON.ActionManager.NothingTrigger, [ // Then is used to add a child action used alternatively with the root action.
                        goToColorAction,                                                 // First click: root action. Second click: child action. Third click: going back to root action and so on...
                        new BABYLON.SetValueAction(BABYLON.ActionManager.NothingTrigger, mesh.material, "wireframe", false)
                    ]));
                mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickTrigger, mesh.material, "wireframe", true))
                    .then(new BABYLON.DoNothingAction());
                mesh.actionManager.registerAction(new BABYLON.SetStateAction(BABYLON.ActionManager.OnPickTrigger, light, "off"))
                    .then(new BABYLON.SetStateAction(BABYLON.ActionManager.OnPickTrigger, light, "on"));
            };

            prepareButton(redBox, BABYLON.Color3.Red(), light1);
            prepareButton(greenBox, BABYLON.Color3.Green(), light2);
            prepareButton(blueBox, BABYLON.Color3.Blue(), light3);

            // Conditions
            sphere.actionManager = new BABYLON.ActionManager(scene);
            var condition1 = new BABYLON.StateCondition(sphere.actionManager, light1, "off");
            var condition2 = new BABYLON.StateCondition(sphere.actionManager, light1, "on");

            sphere.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnLeftPickTrigger, camera, "alpha", 0, 500, condition1));
            sphere.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnLeftPickTrigger, camera, "alpha", Math.PI, 500, condition2));

            // Over/Out
            var makeOverOut = function (mesh) {
                mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, mesh.material, "emissiveColor", mesh.material.emissiveColor));
                mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, mesh.material, "emissiveColor", BABYLON.Color3.White()));
                mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, mesh, "scaling", new BABYLON.Vector3(1, 1, 1), 150));
                mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, mesh, "scaling", new BABYLON.Vector3(1.1, 1.1, 1.1), 150));
            };

            makeOverOut(redBox);
            makeOverOut(greenBox);
            makeOverOut(blueBox);
            makeOverOut(sphere);

            // scene's actions
            scene.actionManager = new BABYLON.ActionManager(scene);

            var rotate = function (mesh) {
                scene.actionManager.registerAction(new BABYLON.IncrementValueAction(BABYLON.ActionManager.OnEveryFrameTrigger, mesh, "rotation.y", 0.01));
            };

            rotate(redBox);
            rotate(greenBox);
            rotate(blueBox);

            // Intersections
            donut.actionManager = new BABYLON.ActionManager(scene);

            donut.actionManager.registerAction(new BABYLON.SetValueAction(
                { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: sphere },
                donut, "scaling", new BABYLON.Vector3(1.2, 1.2, 1.2)));

            donut.actionManager.registerAction(new BABYLON.SetValueAction(
                { trigger: BABYLON.ActionManager.OnIntersectionExitTrigger, parameter: sphere }
                , donut, "scaling", new BABYLON.Vector3(1, 1, 1)));

            // Keyboard
            scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                { trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: "r" },
                function () {
                    camera.setPosition(new BABYLON.Vector3(20, 200, 400));
                }));

            // Animations
            var alpha = 0;
            scene.registerBeforeRender(function () {
                donut.position.x = 100 * Math.cos(alpha);
                donut.position.y = 5;
                donut.position.z = 100 * Math.sin(alpha);
                alpha += 0.01;
            });

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });
    },

    dragAndDropBabylonJs : function(component, event, helper)  {
        var canvas = component.find("canvas").getElement(); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function() {
            var scene = new BABYLON.Scene(engine);
            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
            camera.setPosition(new BABYLON.Vector3(20, 200, 400));

            camera.lowerBetaLimit = 0.1;
            camera.upperBetaLimit = (Math.PI / 2) * 0.99;
            camera.lowerRadiusLimit = 150;

            scene.clearColor = new BABYLON.Color3(0, 0, 0);

            // Light
            var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);

            // Ground
            var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene, false);
            var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
            groundMaterial.specularColor = BABYLON.Color3.Black();
            ground.material = groundMaterial;

            // Meshes
            var redSphere = BABYLON.Mesh.CreateSphere("red", 32, 20, scene);
            var redMat = new BABYLON.StandardMaterial("ground", scene);
            redMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.emissiveColor = BABYLON.Color3.Red();
            redSphere.material = redMat;
            redSphere.position.y = 10;
            redSphere.position.x -= 100;

            var greenBox = BABYLON.Mesh.CreateBox("green", 20, scene);
            var greenMat = new BABYLON.StandardMaterial("ground", scene);
            greenMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);;
            greenMat.emissiveColor = BABYLON.Color3.Green();
            greenBox.material = greenMat;
            greenBox.position.z -= 100;
            greenBox.position.y = 10;

            var blueBox = BABYLON.Mesh.CreateBox("blue", 20, scene);
            var blueMat = new BABYLON.StandardMaterial("ground", scene);
            blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            blueMat.emissiveColor = BABYLON.Color3.Blue();
            blueBox.material = blueMat;
            blueBox.position.x += 100;
            blueBox.position.y = 10;


            var purpleDonut = BABYLON.Mesh.CreateTorus("red", 30, 10, 32, scene);
            var purpleMat = new BABYLON.StandardMaterial("ground", scene);
            purpleMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            purpleMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            purpleMat.emissiveColor = BABYLON.Color3.Purple();
            purpleDonut.material = purpleMat;
            purpleDonut.position.y = 10;
            purpleDonut.position.z += 100;

            // Events
            var canvas = engine.getRenderingCanvas();
            var startingPoint;
            var currentMesh;

            var getGroundPosition = function (evt) {
                // Use a predicate to get position on the ground
                var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh == ground; });
                if (pickinfo.hit) {
                    return pickinfo.pickedPoint;
                }

                return null;
            };

            var onPointerDown = function (evt) {
                if (evt.button !== 0) {
                    return;
                }

                // check if we are under a mesh
                var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh !== ground; });
                if (pickInfo.hit) {
                    currentMesh = pickInfo.pickedMesh;
                    startingPoint = getGroundPosition(evt);

                    if (startingPoint) { // we need to disconnect camera from canvas
                        setTimeout(function () {
                            camera.detachControl(canvas);
                        }, 0);
                    }
                }
            };

            var onPointerUp = function () {
                if (startingPoint) {
                    camera.attachControl(canvas);
                    startingPoint = null;
                    return;
                }
            };

            var onPointerMove = function (evt) {
                if (!startingPoint) {
                    return;
                }

                var current = getGroundPosition(evt);

                if (!current) {
                    return;
                }

                var diff = current.subtract(startingPoint);
                currentMesh.position.addInPlace(diff);

                startingPoint = current;

            };

            canvas.addEventListener("pointerdown", onPointerDown, false);
            canvas.addEventListener("pointerup", onPointerUp, false);
            canvas.addEventListener("pointermove", onPointerMove, false);

            scene.onDispose = function () {
                canvas.removeEventListener("pointerdown", onPointerDown);
                canvas.removeEventListener("pointerup", onPointerUp);
                canvas.removeEventListener("pointermove", onPointerMove);
            };

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });
    },

    dragAndDropMovingObjectsBabyonJS : function(component, event, helper) {
        var canvas = component.find("canvas").getElement(); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () {
            // Create the scene space
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
            camera.setPosition(new BABYLON.Vector3(20, 200, 400));

            camera.lowerBetaLimit = 0.1;
            camera.upperBetaLimit = (Math.PI / 2) * 0.99;
            camera.lowerRadiusLimit = 150;

            scene.clearColor = new BABYLON.Color3(0, 0, 0);

            var light1 = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
            var light2 = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);
            var light3 = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 50, 0), scene);

            light1.diffuse = BABYLON.Color3.Red();
            light2.diffuse = BABYLON.Color3.Green();
            light3.diffuse = BABYLON.Color3.Blue();

            // Define states
            light1.state = "on";
            light2.state = "on";
            light3.state = "on";

            // Ground
            var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene, false);
            var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
            groundMaterial.specularColor = BABYLON.Color3.Black();
            ground.material = groundMaterial;

            // Boxes
            var redBox = BABYLON.Mesh.CreateBox("red", 20, scene);
            var redMat = new BABYLON.StandardMaterial("ground", scene);
            redMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.emissiveColor = BABYLON.Color3.Red();
            redBox.material = redMat;
            redBox.position.x -= 100;

            var greenBox = BABYLON.Mesh.CreateBox("green", 20, scene);
            var greenMat = new BABYLON.StandardMaterial("ground", scene);
            greenMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            greenMat.emissiveColor = BABYLON.Color3.Green();
            greenBox.material = greenMat;
            greenBox.position.z -= 100;

            var blueBox = BABYLON.Mesh.CreateBox("blue", 20, scene);
            var blueMat = new BABYLON.StandardMaterial("ground", scene);
            blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            blueMat.emissiveColor = BABYLON.Color3.Blue();
            blueBox.material = blueMat;
            blueBox.position.x += 100;

            // Sphere
            var sphere = BABYLON.Mesh.CreateSphere("sphere", 16, 20, scene);
            var sphereMat = new BABYLON.StandardMaterial("ground", scene);
            sphereMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            sphereMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            sphereMat.emissiveColor = BABYLON.Color3.Purple();
            sphere.material = sphereMat;
            sphere.position.z += 100;

            // Rotating donut
            var donut = BABYLON.Mesh.CreateTorus("donut", 20, 8, 16, scene);

            // On pick interpolations
            var prepareButton = function (mesh, color, light) {
                var goToColorAction = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light, "diffuse", color, 1000, null, true);

                mesh.actionManager = new BABYLON.ActionManager(scene);
                mesh.actionManager.registerAction(
                    new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, light, "diffuse", BABYLON.Color3.Black(), 1000))
                    .then(new BABYLON.CombineAction(BABYLON.ActionManager.NothingTrigger, [ // Then is used to add a child action used alternatively with the root action.
                        goToColorAction,                                                 // First click: root action. Second click: child action. Third click: going back to root action and so on...
                        new BABYLON.SetValueAction(BABYLON.ActionManager.NothingTrigger, mesh.material, "wireframe", false)
                    ]));
                mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickTrigger, mesh.material, "wireframe", true))
                    .then(new BABYLON.DoNothingAction());
                mesh.actionManager.registerAction(new BABYLON.SetStateAction(BABYLON.ActionManager.OnPickTrigger, light, "off"))
                    .then(new BABYLON.SetStateAction(BABYLON.ActionManager.OnPickTrigger, light, "on"));
            };

            prepareButton(redBox, BABYLON.Color3.Red(), light1);
            prepareButton(greenBox, BABYLON.Color3.Green(), light2);
            prepareButton(blueBox, BABYLON.Color3.Blue(), light3);

            // Conditions
            sphere.actionManager = new BABYLON.ActionManager(scene);
            var condition1 = new BABYLON.StateCondition(sphere.actionManager, light1, "off");
            var condition2 = new BABYLON.StateCondition(sphere.actionManager, light1, "on");

            sphere.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnLeftPickTrigger, camera, "alpha", 0, 500, condition1));
            sphere.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnLeftPickTrigger, camera, "alpha", Math.PI, 500, condition2));

            // Over/Out
            var makeOverOut = function (mesh) {
                mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, mesh.material, "emissiveColor", mesh.material.emissiveColor));
                mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, mesh.material, "emissiveColor", BABYLON.Color3.White()));
                mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, mesh, "scaling", new BABYLON.Vector3(1, 1, 1), 150));
                mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, mesh, "scaling", new BABYLON.Vector3(1.1, 1.1, 1.1), 150));
            };

            makeOverOut(redBox);
            makeOverOut(greenBox);
            makeOverOut(blueBox);
            makeOverOut(sphere);

            // scene's actions
            scene.actionManager = new BABYLON.ActionManager(scene);

            var rotate = function (mesh) {
                scene.actionManager.registerAction(new BABYLON.IncrementValueAction(BABYLON.ActionManager.OnEveryFrameTrigger, mesh, "rotation.y", 0.01));
            };

            rotate(redBox);
            rotate(greenBox);
            rotate(blueBox);

            // Intersections
            donut.actionManager = new BABYLON.ActionManager(scene);

            donut.actionManager.registerAction(new BABYLON.SetValueAction(
                { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: sphere },
                donut, "scaling", new BABYLON.Vector3(1.2, 1.2, 1.2)));

            donut.actionManager.registerAction(new BABYLON.SetValueAction(
                { trigger: BABYLON.ActionManager.OnIntersectionExitTrigger, parameter: sphere }
                , donut, "scaling", new BABYLON.Vector3(1, 1, 1)));

            // Keyboard
            scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                { trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: "r" },
                function () {
                    camera.setPosition(new BABYLON.Vector3(20, 200, 400));
                }));

            // Animations
            var alpha = 0;
            scene.registerBeforeRender(function () {
                donut.position.x = 100 * Math.cos(alpha);
                donut.position.y = 5;
                donut.position.z = 100 * Math.sin(alpha);
                alpha += 0.01;
            });

            // Events
            var canvas = engine.getRenderingCanvas();
            var startingPoint;
            var currentMesh;

            var getGroundPosition = function (evt) {
                // Use a predicate to get position on the ground
                var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh == ground; });
                if (pickinfo.hit) {
                    return pickinfo.pickedPoint;
                }

                return null;
            };

            var onPointerDown = function (evt) {
                if (evt.button !== 0) {
                    return;
                }

                // check if we are under a mesh
                var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh !== ground; });
                if (pickInfo.hit) {
                    currentMesh = pickInfo.pickedMesh;
                    startingPoint = getGroundPosition(evt);

                    if (startingPoint) { // we need to disconnect camera from canvas
                        setTimeout(function () {
                            camera.detachControl(canvas);
                        }, 0);
                    }
                }
            };

            var onPointerUp = function () {
                if (startingPoint) {
                    camera.attachControl(canvas);
                    startingPoint = null;
                    return;
                }
            };

            var onPointerMove = function (evt) {
                if (!startingPoint) {
                    return;
                }

                var current = getGroundPosition(evt);

                if (!current) {
                    return;
                }

                var diff = current.subtract(startingPoint);
                currentMesh.position.addInPlace(diff);

                startingPoint = current;

            };

            canvas.addEventListener("pointerdown", onPointerDown, false);
            canvas.addEventListener("pointerup", onPointerUp, false);
            canvas.addEventListener("pointermove", onPointerMove, false);

            scene.onDispose = function () {
                canvas.removeEventListener("pointerdown", onPointerDown);
                canvas.removeEventListener("pointerup", onPointerUp);
                canvas.removeEventListener("pointermove", onPointerMove);
            };

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });
    },

    octTreeBabylonJs : function(component, event, helper) {
        var canvas = component.find("canvas").getElement(); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () {
            var scene = new BABYLON.Scene(engine);
            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
            var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 10, 0), scene);
            var material = new BABYLON.StandardMaterial("kosh", scene);
            var sphere = BABYLON.Mesh.CreateSphere("sphere0", 16, 1, scene);

            camera.setPosition(new BABYLON.Vector3(-10, 10, 0));

            // Sphere material
            material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
            material.specularColor = new BABYLON.Color3(1.0, 1.0, 1.0);
            material.specularPower = 32;
            material.checkReadyOnEveryCall = false;
            sphere.material = material;

            // Fog
            scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
            scene.fogDensity = 0.05;

            // Clone spheres
            var playgroundSize = 50;
            for (var index = 0; index < 8000; index++) {
                var clone = sphere.clone("sphere" + (index + 1), null, true);
                var scale = Math.random() * 0.8 + 0.6;
                clone.scaling = new BABYLON.Vector3(scale, scale, scale);
                clone.position = new BABYLON.Vector3(Math.random() * 2 * playgroundSize - playgroundSize, Math.random() * 2 * playgroundSize - playgroundSize, Math.random() * 2 * playgroundSize - playgroundSize);
            }
            sphere.setEnabled(false);
            scene.createOrUpdateSelectionOctree();

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });
    }
});