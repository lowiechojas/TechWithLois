const projects = [
  {
    id: "church-slide-controller",
    title: "Church Slide Controller",
    description: "A remote presentation control system over Wi-Fi. Allows seamless slide navigation from anywhere in the venue using a custom ESP32-based controller with a clean web interface.",
    category: ["Electronics", "Programming"],
    techStack: ["ESP32", "HTML/CSS/JS", "WebSockets", "3D Printing"],
    features: [
      "Wi-Fi based wireless control",
      "Real-time slide navigation",
      "Custom PCB design",
      "Web-based configuration interface",
      "Battery powered with USB-C charging"
    ],
    github: "#",
    demo: "#",
    image: null
  },
  {
    id: "pi-pico-led-controller",
    title: "Pi Pico LED Controller",
    description: "A smart home LED controller with an intuitive web UI. Control RGB LED strips with custom animations, schedules, and color presets from any device on your network.",
    category: ["Electronics"],
    techStack: ["Raspberry Pi Pico W", "MicroPython", "HTML/CSS", "REST API"],
    features: [
      "Web-based color picker and presets",
      "Scheduled lighting modes",
      "Multiple animation patterns",
      "OTA firmware updates",
      "Low power standby mode"
    ],
    github: "#",
    demo: "#",
    image: null
  },
  {
    id: "can-bus-logger",
    title: "CAN Bus Data Logger",
    description: "An automotive CAN bus sniffer and data logger for vehicle diagnostics. Captures and decodes CAN frames in real-time with SD card storage and Bluetooth streaming.",
    category: ["Automotive"],
    techStack: ["STM32", "CAN 2.0B", "FreeRTOS", "Bluetooth LE"],
    features: [
      "Real-time CAN frame capture",
      "DBC file decoding",
      "SD card logging with timestamps",
      "Bluetooth streaming to mobile app",
      "Configurable message filters"
    ],
    github: "#",
    demo: "#",
    image: null
  },
  {
    id: "obd2-dashboard",
    title: "OBD-II Dashboard",
    description: "A custom digital dashboard that reads OBD-II data from any vehicle and displays real-time metrics on a TFT screen with configurable gauge layouts.",
    category: ["Automotive"],
    techStack: ["ESP32", "ELM327", "LVGL", "C++"],
    features: [
      "Real-time RPM, speed, and temperature",
      "Customizable gauge layouts",
      "DTC code reader and clearer",
      "Trip computer with fuel tracking",
      "3.5\" TFT color display"
    ],
    github: "#",
    demo: "#",
    image: null
  },
  {
    id: "home-automation-hub",
    title: "Home Automation Hub",
    description: "A centralized smart home hub built on a Raspberry Pi that integrates various IoT devices using MQTT protocol with a React-based control dashboard.",
    category: ["Electronics", "Programming"],
    techStack: ["Raspberry Pi 4", "MQTT", "React", "Node.js", "Docker"],
    features: [
      "MQTT device integration",
      "React web dashboard",
      "Automation rules engine",
      "Mobile-responsive UI",
      "Docker containerized services"
    ],
    github: "#",
    demo: "#",
    image: null
  },
  {
    id: "firmware-ota-updater",
    title: "Firmware OTA Updater",
    description: "A reusable over-the-air firmware update library for ESP32 projects with rollback support, integrity verification, and a management CLI tool.",
    category: ["Programming"],
    techStack: ["ESP-IDF", "C", "Python", "HTTPS"],
    features: [
      "Secure HTTPS delivery",
      "SHA-256 integrity checks",
      "Automatic rollback on failure",
      "Version management CLI",
      "Delta update support"
    ],
    github: "#",
    demo: "#",
    image: null
  }
];

export default projects;
