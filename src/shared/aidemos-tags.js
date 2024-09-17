// AIDEMOS_METADATA_FILE_NAME
export const INDUSTRY_CATEGORY = /** @type {const} */ ({
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
export const TYPE_TASKS = /** @type {const} */ ({
  AI_TYPE: {
    ROBOTICS: 'Robotics',
    RECOMMENDATION_SYSTEMS: 'Recommendation Systems',
    GENERATIVE_AI: 'Generative AI',
    ANOMALY_DETECTION: 'Anomaly Detection',
    SPEECH_RECOGNITION: 'Speech Recognition',
    COMPUTER_VISION: 'Computer Vision',
    NATURAL_LANGUAGE_PROCESSING: 'Natural Language Processing',
  },

  USE_CASE_FUNCTIONALITY: {
    REAL_TIME_VIDEO_PROCESSING: 'Real-time Video Processing',
    PREDICTIVE_MAINTENANCE: 'Predictive Maintenance',
    FRAUD_DETECTION: 'Fraud Detection',
    SPEECH_TO_TEXT: 'Speech-to-Text',
    RECOMMENDATION_ENGINE: 'Recommendation Engine',
    CHATBOTS: 'Chatbots',
    AUTONOMOUS_SYSTEMS: 'Autonomous Systems',
    IMAGE_RECOGNITION: 'Image Recognition',
    SENTIMENT_ANALYSIS: 'Sentiment Analysis',
  },
});

export const TYPE_TASKS_VALUES = Object.values(TYPE_TASKS)
  .map((v) => Object.values(v))
  .flat();

// AIDEMOS_METADATA_FILE_NAME
export const LIBRARIES_TECHNOLOGY = /** @type {const} */ ({
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
  COMPLEXITY_LEVEL: {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
    EXPERT: 'Expert',
  },
});
export const LIBRARIES_TECHNOLOGY_VALUES = Object.values(LIBRARIES_TECHNOLOGY)
  .map((v) => Object.values(v))
  .flat(); // AIDEMOS_METADATA_FILE_NAME
