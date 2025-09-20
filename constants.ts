
import type { Panels, SubDetails } from './types';

export const PANELS_DATA: Panels = {
  neural: {
    id: 'neural',
    icon: 'fas fa-brain',
    title: 'Neural Networks',
    description: 'Advanced machine learning algorithms that mimic human cognition and adapt to complex data patterns.',
    detail: {
      title: 'Neural Networks',
      description: 'Our neural networks are designed to mimic the structure and function of the human brain, enabling complex pattern recognition and adaptive learning capabilities.',
      features: [
        { id: 'deep', icon: 'fas fa-project-diagram', title: 'Deep Learning', description: 'Multi-layered architectures that learn hierarchical representations of data for superior pattern recognition.' },
        { id: 'realtime', icon: 'fas fa-bolt', title: 'Real-time Adaptation', description: 'Continuous learning from new data streams without requiring complete retraining.' },
        { id: 'optimization', icon: 'fas fa-cogs', title: 'Self-Optimization', description: 'Automated hyperparameter tuning and architecture refinement for peak performance.' },
      ]
    }
  },
  autonomous: {
    id: 'autonomous',
    icon: 'fas fa-robot',
    title: 'Autonomous Agents',
    description: 'Self-directed AI entities that operate independently to solve complex problems and execute tasks.',
    detail: {
        title: 'Autonomous Agents',
        description: 'Self-directed AI entities that operate independently to solve complex problems and execute tasks with minimal human intervention.',
        features: [
            { id: 'automation', icon: 'fas fa-tasks', title: 'Task Automation', description: 'End-to-end execution of complex workflows with built-in decision-making capabilities.' },
            { id: 'operation', icon: 'fas fa-sync-alt', title: 'Continuous Operation', description: '24/7 operation with self-monitoring and error recovery mechanisms.' },
            { id: 'innovation', icon: 'fas fa-lightbulb', title: 'Innovative Solutions', description: 'Creative problem-solving approaches that go beyond traditional programming.' },
        ]
    }
  },
  quantum: {
    id: 'quantum',
    icon: 'fas fa-microchip',
    title: 'Quantum Computing',
    description: 'Leveraging quantum mechanics to process information at speeds beyond classical computing limitations.',
    detail: {
        title: 'Quantum Computing',
        description: 'Leveraging quantum mechanics to process information at speeds beyond classical computing limitations.',
        features: [
            { id: 'supremacy', icon: 'fas fa-atom', title: 'Quantum Supremacy', description: 'Solving problems in seconds that would take classical computers millennia.' },
            { id: 'encryption', icon: 'fas fa-lock', title: 'Unbreakable Encryption', description: 'Quantum-resistant cryptographic protocols for ultimate data security.' },
            { id: 'optimization_quantum', icon: 'fas fa-search', title: 'Optimization', description: 'Finding optimal solutions in vast solution spaces through quantum parallelism.' },
        ]
    }
  },
  immersive: {
    id: 'immersive',
    icon: 'fas fa-vr-cardboard',
    title: 'Immersive Reality',
    description: 'Blending physical and digital worlds to create seamless interactive experiences.',
    detail: {
        title: 'Immersive Reality',
        description: 'Blending physical and digital worlds to create seamless interactive experiences.',
        features: [
            { id: 'mixed', icon: 'fas fa-glasses', title: 'Mixed Reality', description: 'Seamless integration of digital elements into the physical environment.' },
            { id: 'haptic', icon: 'fas fa-hand-point-up', title: 'Haptic Feedback', description: 'Tactile sensations that enhance the sense of presence in virtual environments.' },
            { id: 'collaborative', icon: 'fas fa-users', title: 'Collaborative Spaces', description: 'Shared virtual environments for remote collaboration and creativity.' },
        ]
    }
  },
  interfaces: {
    id: 'interfaces',
    icon: 'fas fa-network-wired',
    title: 'Neural Interfaces',
    description: 'Direct brain-computer connections that enable seamless interaction with digital systems.',
    detail: {
        title: 'Neural Interfaces',
        description: 'Direct brain-computer connections that enable seamless interaction with digital systems.',
        features: [
            { id: 'control', icon: 'fas fa-brain', title: 'Thought Control', description: 'Control digital devices and interfaces through direct neural signals.' },
            { id: 'memory', icon: 'fas fa-memory', title: 'Memory Enhancement', description: 'Augmenting human memory with digital storage and retrieval systems.' },
            { id: 'offloading', icon: 'fas fa-sync', title: 'Cognitive Offloading', description: 'Transferring computational tasks from the brain to external processors.' },
        ]
    }
  },
  learning: {
    id: 'learning',
    icon: 'fas fa-infinity',
    title: 'Infinite Learning',
    description: 'Continuous adaptation and evolution through real-time data processing and pattern recognition.',
    detail: {
        title: 'Infinite Learning',
        description: 'Continuous adaptation and evolution through real-time data processing and pattern recognition.',
        features: [
            { id: 'adaptive', icon: 'fas fa-chart-line', title: 'Adaptive Intelligence', description: 'Systems that evolve their behavior based on changing environments and requirements.' },
            { id: 'synthesis', icon: 'fas fa-database', title: 'Data Synthesis', description: 'Creating new knowledge by combining insights from multiple data sources.' },
            { id: 'discovery', icon: 'fas fa-lightbulb', title: 'Creative Discovery', description: 'Generating novel solutions and ideas through pattern recognition across domains.' },
        ]
    }
  }
};

export const SUB_DETAIL_DATA: SubDetails = {
    deep: {
        id: 'deep',
        parentId: 'neural',
        icon: 'fas fa-project-diagram',
        title: 'Deep Learning Architecture',
        description: 'Our neural networks utilize multi-layered architectures that learn hierarchical representations of data for superior pattern recognition and decision-making capabilities.',
        specs: [
            { value: '128', label: 'Layers' },
            { value: '2.4B', label: 'Parameters' },
            { value: '98.7%', label: 'Accuracy' },
            { value: '42ms', label: 'Latency' },
        ],
        techDetails: {
            title: 'Technical Specifications',
            items: [
                'Transformer-based attention mechanisms for contextual understanding',
                'Residual connections to enable training of deep networks',
                'Batch normalization for stable training dynamics',
                'Dropout regularization to prevent overfitting',
                'Adam optimizer with adaptive learning rates',
            ]
        }
    },
    realtime: {
        id: 'realtime',
        parentId: 'neural',
        icon: 'fas fa-bolt',
        title: 'Real-time Adaptation Engine',
        description: 'Continuous learning from new data streams without requiring complete retraining, enabling systems to evolve with changing conditions.',
        specs: [
            { value: '0.5s', label: 'Update Interval' },
            { value: '99.9%', label: 'Uptime' },
            { value: '10K', label: 'Events/sec' },
            { value: '0.1%', label: 'Drift' },
        ],
        techDetails: {
            title: 'Adaptation Mechanisms',
            items: [
                'Online learning algorithms for incremental model updates',
                'Anomaly detection for identifying concept drift',
                'Ensemble methods for robust predictions under change',
                'Active learning to prioritize informative samples',
                'Transfer learning to leverage prior knowledge',
            ]
        }
    },
    optimization: {
        id: 'optimization',
        parentId: 'neural',
        icon: 'fas fa-cogs',
        title: 'Self-Optimization Framework',
        description: 'Automated hyperparameter tuning and architecture refinement for peak performance without manual intervention.',
        specs: [
            { value: '32', label: 'Parameters' },
            { value: '95%', label: 'Efficiency' },
            { value: '10x', label: 'Speedup' },
            { value: 'Auto', label: 'Tuning' },
        ],
        techDetails: {
            title: 'Optimization Techniques',
            items: [
                'Bayesian optimization for hyperparameter search',
                'Neural architecture search for model design',
                'Gradient-based pruning for model compression',
                'Quantization for efficient inference',
                'Knowledge distillation for model transfer',
            ]
        }
    },
     // NOTE: Add other sub-detail data here if needed. This example only includes the ones for the "Neural Networks" panel.
};
