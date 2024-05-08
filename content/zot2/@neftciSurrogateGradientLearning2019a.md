
# Surrogate Gradient Learning in Spiking Neural Networks: Bringing the Power of Gradient-Based Optimization to Spiking Neural Networks
Read:: - [ ] Neftci et al. (2019) - Surrogate Gradient Learning in Spiking Neural Networks: Bringing the Power of Gradient-Based Optimization to Spiking Neural Networks 🛫2023-12-04 !!2 #rd #citation #todoist
Print::  ❌
Zotero Link:: [Zotero](zotero://select/library/items/P2DUDGZ8) 
Files:: [attachment](<file:///C:/Users/michaelt/Insync/m@tarlton.info/Google%20Drive/06.%20Zotero/storage_new/IEEE%20Signal%20Processing%20Magazine_2019/Neftci%20et%20al_2019_Surrogate%20Gradient%20Learning%20in%20Spiking%20Neural%20Networks.pdf>)
Reading Note::
Web Rip::
url:: 

```dataview
TABLE without id
file.link as "Related Files",
title as "Title",
type as "type"
FROM "" AND -"ZZ. planning"
WHERE citekey = "neftciSurrogateGradientLearning2019a" 
SORT file.cday DESC
```

> [!Excerpt] Abstract
> Spiking neural networks (SNNs) are nature's versatile solution to fault-tolerant, energy-efficient signal processing. To translate these benefits into hardware, a growing number of neuromorphic spiking NN processors have attempted to emulate biological NNs. These developments have created an imminent need for methods and tools that enable such systems to solve real-world signal processing problems. Like conventional NNs, SNNs can be trained on real, domain-specific data; however, their training requires the overcoming of a number of challenges linked to their binary and dynamical nature. This article elucidates step-by-step the problems typically encountered when training SNNs and guides the reader through the key concepts of synaptic plasticity and data-driven learning in the spiking setting. Accordingly, it gives an overview of existing approaches and provides an introduction to surrogate gradient (SG) methods, specifically, as a particularly flexible and efficient method to overcome the aforementioned challenges.
# Quick Reference

# Top Notes

# Tasks










# Extracted Annotations and Comments

> [!Highlight] Page 54
> 	Credit assignment with spiking neurons: Challenges and solutions
> ^E767YKEQa7GZGQFC3p4






# Figures (blue)

> [!Fig 2]
> ![[50 Reading/zotlit_plugin/ZtImgExcerpt/TUNGRP9L.png]]
> **Page 54**
> 
> ---
> 	Fig 2
> ^TUNGRP9La7GZGQFC3p4

> FIGURE 2. An illustration of the computational graph of an SNN in discrete time. The time steps flow from left to right. Input spikes S()0are fed into the network from the bottom and propagate upward to higher layers. The synaptic currents I()1are decayed by a in each time step and fed into the membrane potentials . U()1The U()1are similarly decaying over time, as characterized by . b Spike trains S()1are generated by applying a threshold nonlinearity to the membrane potentials U()1in each time step. Spikes causally affect the network state (red connections). First, each spike causes the membrane potential of the neuron that emits the spike to be reset. Second, each spike may be communicated to the same neuronal population via recurrent connections . V()1Finally, it may also be communicated via W()2to another downstream network layer or, alternatively, a readout layer on which a cost function is defined.
> **Page 54**
> 
> ---
> 	Fig 2
> ^YQEYUZEYa7GZGQFC3p4





