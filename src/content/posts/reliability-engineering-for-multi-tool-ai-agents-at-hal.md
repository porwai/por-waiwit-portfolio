---
title: "🧩 Reliability Engineering for Multi-Tool AI Agents at HAL"
pubDate: 2025-01-15
description: "Working on reliability optimization and benchmark construction for autonomous AI agents at Princeton's SAgE Lab, focusing on system-level reliability rather than just model accuracy."
author: "Por Waiwitlikhit"
image: { url: "/react.png", alt: "Princeton AI Lab Research" }
---

I work with the Holistic Agent Leaderboard (HAL) at Princeton's SAgE Lab, advised by Sayash Kapoor, where we evaluate and debug autonomous AI agents on real scientific computing tasks. Unlike static benchmarks, HAL tasks require agents to coordinate Python, R, shell, dependency resolution, notebook execution, and reproducible pipelines. Our focus is not model accuracy alone, but the system-level reliability of agents as tool-orchestrating processes.

## Research Scope

My current work centers on two directions:

⸻

### (1) Reliability Optimization on CORE-Bench Models

We investigate where reliability breaks down when agents execute real workflows, and modify agent policies and execution environments to expose reasoning failures rather than infrastructure bottlenecks. This includes:

- Behavioral restrictions on tool usage (e.g., forcing explicit dependency planning)
- Structured error-recovery strategies rather than trial-and-error retries
- Removing non-reasoning failure modes from the evaluation surface (e.g., random CRAN compilation failures)

**Goal**: ensure model failures reflect planning, abstraction, and tool reasoning errors, not nondeterministic environment crashes.

⸻

### (2) Benchmark Construction for Realistic Agent Tasks

We are building new HAL tasks that emphasize:

- Reproducible execution across heterogeneous languages and data tools
- Deterministic failure surfaces for scientific computation
- Evaluation signals beyond pass/fail, enabling behavioral scoring (self-correction, planning execution, tool validation)

These tasks are designed so we can measure agent competency as a sequential decision system — not as a single-step code generator.

⸻

## Example: Diagnosing R-Pipeline Failures on CORE-Bench-Hard

A concrete case: agents repeatedly failed to execute RMarkdown workflows, not due to incorrect reasoning, but due to unstructured dependency installation and quoting failures. We introduced:

- System-level dependencies only (e.g., libudunits2, pandoc, gfortran)
- No CRAN packages preinstalled
- Enforced single-shot, deduplicated dependency planning before execution
- Forbade fragile inline Rscript -e code; agents must write executable scripts

This shifted the error distribution from "R cannot compile" to executable reasoning failures, improving GPT-5 Medium from ~26% → ~40% on CORE-Bench-Hard without modifying the model.

**Implication**: the dominant factor in agent performance is not model capability, but the interaction between program structure and execution environment. Optimizing this interaction is a prerequisite for meaningful benchmarking.

⸻

## Why This Matters

As models scale, benchmarks must measure robust orchestration, not isolated code generation. HAL's objective is to make agent evaluation more analogous to systems research:

- Deterministic execution,
- Evaluable failure modes,
- And attribution of errors to policy vs. model vs. environment.

The long-term direction is to treat AI agents as programmatic abstractions with failure semantics, and to make benchmarks that are diagnostic tools, not just scoreboards.

