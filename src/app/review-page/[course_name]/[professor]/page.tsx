"use client";

import { useParams } from 'next/navigation';
import Page from 'app/page';
import Review from 'components/page/Review';
import AverageStar from 'components/page/Review/AverageStar';
import Header from 'components/page/Review/header';
import SimpleBottomNavigation from 'components/page/Review/navigation';

const ReviewPage = () => {
  const params = useParams();
  const { course_name, professor } = params;

  // course_name과 professor가 string인지 확인
  const courseNameStr = Array.isArray(course_name) ? course_name[0] : course_name;
  const professorStr = Array.isArray(professor) ? professor[0] : professor;

  // course_name과 professor 값 콘솔에 출력
  console.log('course_name:', courseNameStr);
  console.log('professor:', professorStr);

  // 예시로 courseId를 1로 설정 (실제로는 데이터에서 가져와야 함)
  const courseId = 1;

  return (
    <Page title="ReviewPage">
      <Header courseId={courseId} />
      {courseNameStr && professorStr && (
        <>
          <AverageStar courseName={courseNameStr} professor={professorStr} />
          <Review courseName={courseNameStr} professor={professorStr} />
        </>
      )}
      <SimpleBottomNavigation />
    </Page>
  );
};

export default ReviewPage;
