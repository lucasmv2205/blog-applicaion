import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): ReactElement {
  return (
    <>
      <Header />
      <img src="/banner.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Title example</h1>
            <ul>
              <li>
                <FiCalendar />
                12 mar 2022
              </li>
              <li>
                <FiUser />
                Lucas Martins
              </li>
              <li>
                <FiClock />6 min
              </li>
            </ul>
          </div>

          <article>
            <h2>title section</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
              vel deserunt i<strong>jffhsuh</strong>uod mollitia! Sapiente rem
              illum totam porro, deleniti consequatur. Consequuntur, deserunt
              tenetur? Non, obcaecati.
              <a href="#">hgjhsgfkhs</a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
              vel deserunt iusto facilis harum, quod mollitia! Sapiente placeat
              rem
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
