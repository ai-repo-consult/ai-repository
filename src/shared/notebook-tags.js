export const CATEGORIES = /** @type {const} */ ({
  AI_TRENDS: 'AI Trends',
  FIRST_STEPS: 'First Steps',
  API_OVERVIEW: 'API Overview',
  CONVERT: 'Convert',
  OPTIMIZE: 'Optimize',
  MODEL_DEMOS: 'Model Demos',
  MODEL_TRAINING: 'Model Training',
  LIVE_DEMOS: 'Live Demos',
  XAI: 'Explainable AI',
});

// AIDEMOS_METADATA_FILE_NAME
export const INDUSTRY = /** @type {const} */ ({
  HEALTHCARE: 'Healthcare',
  FINANCE: 'Finance',
  MANUFACTURING: 'Manufacturing',
  RETAIL: 'Retail',
  TRANSPORTATION: 'Transportation',
  EDUCATION: 'Education',
  CUSTOMER_SERVICE: 'Customer Service',
  ENTERTAINMENT: 'Entertainment',
  AGRICULTURE: 'Agriculture',
  CYBERSECURITY: 'Cybersecurity',
});

// AIDEMOS_METADATA_FILE_NAME
export const TYPE = /** @type {const} */ ({
    ROBOTICS: 'Robotics',
    RECOMMENDATION_SYSTEMS: 'Recommendation Systems',
    GENERATIVE_AI: 'Generative AI',
    ANOMALY_DETECTION: 'Anomaly Detection',
    SPEECH_RECOGNITION: 'Speech Recognition',
    COMPUTER_VISION: 'Computer Vision',
    NATURAL_LANGUAGE_PROCESSING: 'Natural Language Processing',
})

// AIDEMOS_METADATA_FILE_NAME
export const USE_CASE_FUNCTIONALITY = /** @type {const} */ ({
  REAL_TIME_VIDEO_PROCESSING: 'Real-time Video Processing',
  PREDICTIVE_MAINTENANCE: 'Predictive Maintenance',
  FRAUD_DETECTION: 'Fraud Detection',
  SPEECH_TO_TEXT: 'Speech-to-Text',
  RECOMMENDATION_ENGINE: 'Recommendation Engine',
  CHATBOTS: 'Chatbots',
  AUTONOMOUS_SYSTEMS: 'Autonomous Systems',
  IMAGE_RECOGNITION: 'Image Recognition',
  SENTIMENT_ANALYSIS: 'Sentiment Analysis',
});


export const TASKS = /** @type {const} */ ({
  MULTIMODAL: {
    TEXT_TO_IMAGE: 'Text-to-Image',
    IMAGE_TO_TEXT: 'Image-to-Text',
    TEXT_TO_VIDEO: 'Text-to-Video',
    VIDEO_TO_TEXT: 'Video-to-Text',
    TEXT_TO_AUDIO: 'Text-to-Audio',
    TEXT_TO_SPEECH: 'Text-to-Speech',
    AUDIO_TO_TEXT: 'Audio-to-Text',
    VISUAL_QUESTION_ANSWERING: 'Visual Question Answering',
    IMAGE_CAPTIONING: 'Image Captioning',
    FEATURE_EXTRACTION: 'Feature Extraction',
    TEXT_TO_IMAGE_RETRIEVAL: 'Text-to-Image Retrieval',
    IMAGE_TO_TEXT_RETRIEVAL: 'Image-to-Text Retrieval',
    TEXT_TO_VIDEO_RETRIEVAL: 'Text-to-Video Retrieval',
    IMAGE_TO_3D: 'Image-to-3D',
    IMAGE_TO_VIDEO: 'Image-to-Video',
  },
  CV: {
    IMAGE_CLASSIFICATION: 'Image Classification',
    IMAGE_SEGMENTATION: 'Image Segmentation',
    IMAGE_INPAINTING: 'Image Inpainting',
    IMAGE_TO_IMAGE: 'Image-to-Image',
    OBJECT_DETECTION: 'Object Detection',
    SALIENT_OBJECT_DETECTION: 'Salient Object Detection',
    DEPTH_ESTIMTAION: 'Depth Estimation',
    SUPER_RESOLUTION: 'Super Resolution',
    STYLE_TRANSFER: 'Style Transfer',
    POSE_ESTIMATION: 'Pose Estimation',
    ZERO_SHOT_IMAGE_CLASSIFICATION: 'Zero-Shot Image Classification',
    TEXT_DETECTION: 'Text Detection',
  },
  NLP: {
    TEXT_CLASSIFICATION: 'Text Classification',
    TEXT_GENERATION: 'Text Generation',
    TOKEN_CLASSIFICATION: 'Token Classification',
    TRANSLATION: 'Translation',
    TABLE_QUESTION_ANSWERING: 'Table Question Answering',
    CONVERSATIONAL: 'Conversational',
    ERROR_CORRECTION: 'Error Correction',
    QUESTION_ANSWERING: 'Question Answering',
    PARAPHRASE_IDENTIFICATION: 'Paraphrase Identification',
    NAMED_ENTITY_RECOGNITION: 'Named Entity Recognition',
  },
  AUDIO: {
    AUDIO_TO_AUDIO: 'Audio-to-Audio',
    SPEECH_RECOGNITION: 'Speech Recognition',
    AUDIO_COMPRESSION: 'Audio Compression',
    VOICE_CONVERSION: 'Voice Conversion',
    AUDIO_GENERATION: 'Audio Generation',
    AUDIO_CLASSIFICATION: 'Audio Classification',
    VOICE_ACTIVITY_DETECTION: 'Voice Activity Detection',
  },
  OTHER: {
    KNOWLEDGE_REPRESENTATION: 'Knowledge Representation',
    BYTES_CLASSIFICATION: 'Bytes Classification',
  },
});

export const TASKS_VALUES = Object.values(TASKS)
  .map((v) => Object.values(v))
  .flat();

// AIDEMOS_METADATA_FILE_NAME
export const TECHNOLOGY = /** @type {const} */ ({
  AI_FRAMEWORKS: {
    TENSORFLOW: 'TensorFlow',
    PYTORCH: 'PyTorch',
    OPENVINO: 'OpenVINO',
    HUGGING_FACE: 'Hugging Face',
    KERAS: 'Keras',
    SCIKIT_LEARN: 'Scikit-learn',
    AWS_SAGEMAKER: 'AWS SageMaker',
    GOOGLE_CLOUD_AI: 'Google Cloud AI',
  },
  AI_TECHNIQUES: {
    MACHINE_LEARNING: 'Machine Learning',
    DEEP_LEARNING: 'Deep Learning',
    COMPUTER_VISION: 'Computer Vision',
    NATURAL_LANGUAGE_PROCESSING: 'Natural Language Processing',
    REINFORCEMENT_LEARNING: 'Reinforcement Learning',
    EDGE_COMPUTING: 'Edge Computing',
    TRANSFORMERS: 'Transformers',
    NEURAL_NETWORKS: 'Neural Networks',
    },
  COMPLEXITY_LEVEL : {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
    EXPERT: 'Expert',
  }
})
export const TECHNOLOGY_VALUES = Object.values(TECHNOLOGY)
  .map((v) => Object.values(v))
  .flat();

export const LIBRARIES = /** @type {const} */ ({
  OPENVINO: {
    NNCF: 'NNCF',
    OVC: 'Model Converter',
    BENCHMARK_APP: 'Benchmark Tool',
    OVMS: 'Model Server',
    OMZ: 'Open Model Zoo',
    TOKENIZERS: 'OpenVINO Tokenizers',
    GENAI: 'OpenVINO GenAI',
    XAI: 'OpenVINO Explainable AI',
  },
  OTHER: {
    OPTIMUM_INTEL: 'Optimum Intel',
    TRANSFORMERS: 'Transformers',
    DIFFUSERS: 'Diffusers',
    TENSORFLOW: 'TensorFlow',
    TFLITE: 'TF Lite',
    PYTORCH: 'PyTorch',
    ONNX: 'ONNX',
    PADDLE: 'PaddlePaddle',
    ULTRALYTICS: 'Ultralytics',
    GRADIO: 'Gradio',
  },
});

export const LIBRARIES_VALUES = Object.values(LIBRARIES)
  .map((v) => Object.values(v))
  .flat();
