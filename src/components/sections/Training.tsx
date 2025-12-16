import React, { useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import { TRAINING_AREAS } from "../../utils/constants";
import { FaChevronDown } from "react-icons/fa";
import styles from "../../styles/components/Training.module.css";

/**
 * Training component - Displays Tata Serena's professional training and courses
 * Shows training areas with expandable/collapsible course lists
 * @returns React component for training section
 */
const Training: React.FC = () => {
  const [openAreas, setOpenAreas] = useState<Set<number>>(new Set([0]));

  const toggleArea = (index: number) => {
    setOpenAreas((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <SectionContainer id="training" backgroundColor="var(--color-background)">
      <div className={styles.trainingContent}>
        <h2 className={styles.title}>Formazione e Competenze</h2>
        <p className={styles.subtitle}>
          Una preparazione professionale completa per garantire cura ed
          educazione di qualità
        </p>

        <div className={styles.areasContainer}>
          {TRAINING_AREAS.map((area, index) => (
            <div
              key={`area-${index}`}
              className={`${styles.areaCard} ${
                openAreas.has(index) ? styles.open : ""
              }`}
            >
              <button
                className={styles.areaHeader}
                onClick={() => toggleArea(index)}
                aria-expanded={openAreas.has(index)}
              >
                <h3 className={styles.areaTitle}>{area.area}</h3>
                <FaChevronDown
                  className={`${styles.chevron} ${
                    openAreas.has(index) ? styles.chevronOpen : ""
                  }`}
                />
              </button>
              <div
                className={`${styles.areaContent} ${
                  openAreas.has(index) ? styles.contentOpen : ""
                }`}
              >
                <ul className={styles.coursesList}>
                  {area.courses.map((course, courseIndex) => (
                    <li key={`course-${index}-${courseIndex}`} className={styles.courseItem}>
                      <div className={styles.courseTitle}>{course.title}</div>
                      <div className={styles.courseDescription}>
                        {course.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Training;
